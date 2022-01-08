import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import CardPlano from './components/CardPlano';
import { getAll } from './services/axios';


export default function Home() {

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

    useEffect(() => {
        (async () => {
            setPlanos( await getAll())
        })()
    }, []);

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
