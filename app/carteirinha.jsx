// app/carteirinha.js
import { StyleSheet, Text, View } from 'react-native';

const mockData = [
  {
    id: 1,
    nome: 'Camila',
    rm: '10844',
    instituicao: 'FIEB',
    curso: 'Redes para computadores',
    unidade: 'ITB - Lugarzinho fofo - Unidade Fofa',
    turma: 'IRD2CM',
    serie: '2ª série',
    periodo: 'Manhã',
    validade: '12/2025',
    cpf: '123.456.789-00',
  }
]

export default function Carteirinha() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.h2}>Carteirinha digital</Text>

        {mockData.map((item) => (
          <View key={item.id}>

            <Text style={styles}>Nome:
              <Text style={styles.infotext}>{item.nome}</Text>
            </Text>

            <Text style={styles}>RM:
              <Text style={styles.infotext}>{item.rm}</Text>
            </Text>

            <Text style={styles}>Instituição:
              <Text style={styles.infotext}>{item.instituicao}</Text>
            </Text>

            <Text style={styles}>Curso:
              <Text style={styles.infotext}>{item.curso}</Text>
            </Text>

            <Text style={styles}>Unidade:
              <Text style={styles.infotext}>{item.unidade}</Text>
            </Text>

            <Text style={styles}>Turma:
              <Text style={styles.infotext}>{item.turma}</Text>
            </Text>

            <Text style={styles}>Série:
              <Text style={styles.infotext}>{item.serie}</Text>
            </Text>

            <Text style={styles}>Período:
              <Text style={styles.infotext}>{item.periodo}</Text>
            </Text>

            <Text style={styles}>Validade:
              <Text style={styles.infotext}>{item.validade}</Text>
            </Text>

            <Text style={styles}>CPF:
              <Text style={styles.infotext}>{item.cpf}</Text>
            </Text>
          </View>
        ))}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    //  #2bae9e url("../img/bg-geometricos.png") calc(10px) calc(100% - 20px) no-repeat
    backgroundColor: '#2bae9e',
    padding: 24,
    borderRadius: 8,
  },
  infotext: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  h2: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#fff',
  }
});
