import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import axios from 'axios';
import CardPlano from './components/CardPlano';

const API_URL = `https://graphql.datocms.com/`
const API_TOKEN = `72ac070e7ce64e40e44f78007cbacd`

export default function App() {

  interface IPlanos {
    id: string
    titulo: string
    valor: boolean
    brisaMusic: boolean
    brisaPlay: boolean
    instalacao: boolean
    promocao: boolean
    roteador: boolean
    telefoneFixo: boolean
    telefoneFixoIlimitado: boolean
  };

  const [planos, setPlanos] = useState<IPlanos[]>([])

  useEffect(() =>{

    const config = {
      headers: {
        'Authorization': 'Bearer ' + API_TOKEN
      }
    }
    const fectData = async () => {
      const queryResult = await axios.post (
        API_URL, {
          query: `{
            allPlanos {
              id
              titulo
              valor
              brisaMusic
              brisaPlay
              instalacao
              promocao
              roteador
              telefoneFixo
              telefoneFixoIlimitado
            }
          }`
        },
        config
      );

      const result = queryResult.data.data.allPlanos;
      setPlanos(result);
      console.warn("result", result)
    };

    fectData()
  })

  return (
    <View style={styles.container}>
      <View style={styles.body}>

        <View style={styles.logo}>
          <Text>Brisanet Planos</Text>
        </View>

        <FlatList
          data={planos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <CardPlano text={item.titulo} />}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  body: {
    display: 'flex',
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  logo: {
    alignItems: 'center',
    marginBottom: 10
  },
});
