import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome5'

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title} >Estacionamento</Text>
        <Icon name="car" size={36} color={'#ffb703'} />
      </View>

      <View style={styles.subtitle}>
        <Text style={styles.total} >Vagas: 12</Text>
        <Text style={styles.ocupadas} >Ocupadas: 0</Text>
        <Text style={styles.vazias} >Vazias: 12</Text>
      </View>

      <View style={styles.parking}>

        <View style={styles.leftVagas}>
          <View style={styles.leftVaga}>
            <Icon name="wheelchair" size={28} style={styles.icon} />
          </View>

          <View style={styles.leftVaga} >
            <Text style={styles.leftNumber} >2</Text>
          </View>

          <View style={styles.leftVaga}>
            <Text style={styles.leftNumber} >3</Text>
          </View>

          <View style={styles.leftVaga}>
            <Text style={styles.leftNumber} >4</Text>
          </View>

          <View style={styles.leftVaga}>
            <Text style={styles.leftNumber} >5</Text>
          </View>

          <View style={styles.leftVaga}>
            <Text style={styles.leftNumber} >6</Text>
          </View>
        </View>

        <View style={styles.rightVagas}>
          <View style={styles.rightVaga}>
            <Text style={styles.rightNumber} >7</Text>
          </View>

          <View style={styles.rightVaga}>
            <Text style={styles.rightNumber} >8</Text>
          </View>

          <View style={styles.rightVaga}>
            <Text style={styles.rightNumber} >9</Text>
          </View>

          <View style={styles.rightVaga}>
            <Text style={styles.rightNumber} >10</Text>
          </View>

          <View style={styles.rightVaga}>
            <Text style={styles.rightNumber} >11</Text>
          </View>

          <View style={styles.rightVaga}>
            <Text style={styles.rightNumber} >12</Text>
          </View>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6c757d',
    paddingHorizontal: 20,
    paddingTop: 30
  },

  header: {
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#ffb703',
    paddingRight: 15,
  },

  subtitle: {
    paddingTop: 12,
    paddingHorizontal: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  total: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },

  ocupadas: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },

  vazias: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },

  parking: {
    paddingTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  leftVaga: {
    width: 130,
    height: 80,

    borderWidth: 2,
    borderColor: '#FFF',
    borderRightColor: '#6c757d',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  leftNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFF',
    transform: [{ rotate: '270deg' }]
  },

  icon: {
    color: '#48cae4',
    transform: [{ rotate: '270deg' }]
  },

  rightVaga: {
    width: 130,
    height: 80,

    borderWidth: 2,
    borderColor: '#FFF',
    borderLeftColor: '#6c757d',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rightNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFF',
    alignSelf: 'center',
    transform: [{ rotate: '90deg' }]
  },

  status: {
    borderColor: '#d90429',
    borderLeftColor: '#343a40',

    width: 130,
    height: 80,

    borderWidth: 2,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

})