import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetalhesTarefaScreen from './screens/DetalhesTarefaScreen';

// 🔧 Define as rotas e seus parâmetros
export type RootStackParamList = {
  ListaDeTarefas: undefined;
  DetalhesTarefa: {
    texto: string;
    index: number;
    editarTarefa: (index: number, novoTexto: string) => void;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const STORAGE_KEY = 'minhas_tarefas';

export default function App() {
  // 📝 Estados principais
  const [texto, setTexto] = useState('');
  const [tarefas, setTarefas] = useState<string[]>([]);

  // 🌟 Estados para a citação
  const [citacao, setCitacao] = useState('');
  const [autor, setAutor] = useState('');
  const [carregandoCitacao, setCarregandoCitacao] = useState(true);

  // 📦 Carrega tarefas salvas no AsyncStorage
  useEffect(() => {
    const carregarTarefas = async () => {
      try {
        const tarefasSalvas = await AsyncStorage.getItem(STORAGE_KEY);
        if (tarefasSalvas) {
          setTarefas(JSON.parse(tarefasSalvas));
        }
      } catch (erro) {
        Alert.alert('Erro ao carregar tarefas');
      }
    };

    carregarTarefas();
  }, []);

  // 💾 Salva tarefas toda vez que forem alteradas
  useEffect(() => {
    const salvarTarefas = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tarefas));
      } catch (erro) {
        Alert.alert('Erro ao salvar tarefas');
      }
    };

    salvarTarefas();
  }, [tarefas]);

  // 📡 Busca citação ao iniciar
  useEffect(() => {
    const buscarCitacao = async () => {
      try {
        const response = await fetch('https://dummyjson.com/quotes/random');
        const json = await response.json();
        setCitacao(json.quote);
        setAutor(json.author);
      } catch (erro) {
        setCitacao('Erro ao carregar citação.');
        setAutor('');
      } finally {
        setCarregandoCitacao(false);
      }
    };

    buscarCitacao();
  }, []);

  // ➕ Adiciona nova tarefa
  const adicionarTarefa = () => {
    if (texto.trim() === '') return;
    setTarefas([...tarefas, texto]);
    setTexto('');
  };

  // ✏️ Edita uma tarefa existente
  const editarTarefa = (index: number, novoTexto: string) => {
    const novaLista = [...tarefas];
    novaLista[index] = novoTexto;
    setTarefas(novaLista);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* 🏠 Tela principal */}
        <Stack.Screen name="ListaDeTarefas">
          {({ navigation }) => (
            <View style={styles.container}>
              <Text style={styles.titulo}>Minhas Tarefas</Text>

              {/* Entrada de texto + botão */}
              <View style={styles.blocoEntrada}>
                <TextInput
                  style={styles.input}
                  placeholder="Digite uma tarefa"
                  value={texto}
                  onChangeText={setTexto}
                />
                <Button title="Adicionar Tarefa" onPress={adicionarTarefa} />
              </View>

              {/* Lista de tarefas */}
              <View style={styles.blocoLista}>
                <ScrollView>
                  {tarefas.map((tarefa, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() =>
                        navigation.navigate('DetalhesTarefa', {
                          texto: tarefa,
                          index,
                          editarTarefa,
                        })
                      }
                    >
                      <View style={styles.tarefaItem}>
                        <Text style={styles.tarefaTexto}>{tarefa}</Text>
                        <Text style={styles.botaoEditar}>✏️</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>

              {/* Rodapé com citação */}
              <View style={styles.rodape}>
                {carregandoCitacao ? (
                  <ActivityIndicator size="small" color="#555" />
                ) : (
                  <>
                    <Text style={styles.citacao}>"{citacao}"</Text>
                    <Text style={styles.autor}>— {autor}</Text>
                  </>
                )}
              </View>

              <StatusBar style="auto" />
            </View>
          )}
        </Stack.Screen>

        {/* Tela de edição */}
        <Stack.Screen
          name="DetalhesTarefa"
          component={DetalhesTarefaScreen}
          options={{ title: 'Editar Tarefa' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// 🎨 Estilos visuais do app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f2fd',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  blocoEntrada: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#90caf9',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  blocoLista: {
    width: '100%',
    flex: 1,
  },
  tarefaItem: {
    backgroundColor: '#ffffff',
    padding: 12,
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeftWidth: 5,
    borderLeftColor: '#42a5f5',
  },
  tarefaTexto: {
    fontSize: 16,
    maxWidth: '90%',
  },
  botaoEditar: {
    fontSize: 18,
    color: '#888',
    paddingHorizontal: 10,
  },
  rodape: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  citacao: {
    fontStyle: 'italic',
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  autor: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
});
