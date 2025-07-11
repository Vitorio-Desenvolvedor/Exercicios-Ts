import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App'; // importa o tipo da navegação

type Props = NativeStackScreenProps<RootStackParamList, 'DetalhesTarefa'>;

export default function DetalhesTarefaScreen({ route, navigation }: Props) {
  const { texto, index, editarTarefa } = route.params;
  const [novoTexto, setNovoTexto] = useState(texto);

  const salvarEdicao = () => {
    editarTarefa(index, novoTexto);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Editar Tarefa</Text>
      <TextInput
        style={styles.input}
        value={novoTexto}
        onChangeText={setNovoTexto}
        multiline
      />
      <Button title="Salvar Edição" onPress={salvarEdicao} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderColor: '#90caf9',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    minHeight: 100,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
});
