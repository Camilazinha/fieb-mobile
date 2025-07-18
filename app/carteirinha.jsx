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
        <View
          style={{
            width: '100%',
            height: '1px',
            marginVertical: '8px',
            backgroundColor: 'rgba(0, 0, 0, .1)',
          }}
        />
        {mockData.map((item) => (
          <View key={item.id}>

            <Text style={styles.h2}>{item.nome}</Text>

            <Text style={styles.small}>RM:
              <Text style={styles.infotext}>{item.rm}</Text>
            </Text>

            <Text style={styles.small}>Instituição:
              <Text style={styles.infotext}>{item.instituicao}</Text>
            </Text>

            <Text style={styles.small}>Curso:
              <Text style={styles.infotext}>{item.curso}</Text>
            </Text>

            <Text style={styles.small}>Unidade:
              <Text style={styles.infotext}>{item.unidade}</Text>
            </Text>

            <Text style={styles.small}>Turma:
              <Text style={styles.infotext}>{item.turma}</Text>
            </Text>

            <Text style={styles.small}>Série:
              <Text style={styles.infotext}>{item.serie}</Text>
            </Text>

            <Text style={styles.small}>Período:
              <Text style={styles.infotext}>{item.periodo}</Text>
            </Text>

            <Text style={styles.small}>Validade:
              <Text style={styles.infotext}>{item.validade}</Text>
            </Text>

            <Text style={styles.small}>CPF:
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
  },
  small: {
    color: '#fff',
    fontSize: '80%',
    fontWeight: '400',
  }
});
