import React, { useEffect, useState, useCallback } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome5'
import api from '../services/api'
import { onChangeVaga } from '../services/socketio'
import { splitArray } from '../utils/util'

export default function Home() {
  const [vagas, setVagas] = useState([])
  const [totalVagas, setTotalVagas] = useState(12)
  const [empty, setEmpty] = useState(12)
  const [occupied, setOccupied] = useState(0)

  const getVagas = useCallback(() => {
    api.get("/api/vagas")
      .then(res => {
        setVagas(res.data)

        const totalEmpty = res.data.filter(vaga => !vaga.status)

        setTotalVagas(res.data.length)
        setOccupied(res.data.length - totalEmpty.length)
        setEmpty(totalEmpty.length)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    getVagas()
  }, [])

  useEffect(() => {
    onChangeVaga(() => {
      getVagas()
    })
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title} >Estacionamento</Text>
        <Icon name="car" size={36} color={'#ffb703'} />
      </View>

      <View style={styles.subtitle}>
        <Text style={styles.total} >Vagas: {totalVagas}</Text>
        <Text style={styles.ocupadas} >Ocupadas: {occupied}</Text>
        <Text style={styles.vazias} >Vazias: {empty}</Text>
      </View>

      <View style={styles.parking}>

        <View style={styles.leftVagas}>
          {splitArray(vagas, 2)[0]?.map(vaga => {
            const backgroundColor = vaga.status ? "red" : "#009900"

            if (vaga.type === "DEFICIENTE") {
              return (
                <View key={vaga._id} style={styles.leftVaga}>
                  <View style={[styles.vagaText, { backgroundColor }]}>
                    <Icon name="wheelchair" size={28} color="#FFF" style={styles.iconLeft} />
                  </View>
                </View>
              )
            }

            else if (vaga.type === "IDOSO") {
              return (
                <View key={vaga._id} style={styles.leftVaga} >
                  <View style={[styles.vagaText, { backgroundColor }]}>
                    <Text style={styles.oldman}>I</Text>
                  </View>
                </View>
              )
            }

            return (
              <View key={vaga._id} style={styles.leftVaga}>
                <View style={[styles.vagaText, { backgroundColor }]}>
                  <Text style={styles.leftNumber} >{vaga.number}</Text>
                </View>
              </View>
            )
          })}
        </View>

        <View style={styles.rightVagas}>
          {splitArray(vagas, 2)[1]?.map(vaga => {
            const backgroundColor = vaga.status ? "red" : "#009900"

            if (vaga.type === "DEFICIENTE") {
              return (
                <View key={vaga._id} style={styles.rightVaga}>
                  <View style={[styles.vagaText, { backgroundColor }]}>
                    <Icon name="wheelchair" size={28} color="#FFF" style={styles.iconRight} />
                  </View>
                </View>
              )
            }

            else if (vaga.type === "IDOSO") {
              return (
                <View key={vaga._id} style={styles.rightVaga} >
                  <View style={[styles.vagaText, { backgroundColor }]}>
                    <Text style={styles.oldman}>I</Text>
                  </View>
                </View>
              )
            }

            return (
              <View key={vaga._id} style={styles.rightVaga}>
                <View style={[styles.vagaText, { backgroundColor }]}>
                  <Text style={styles.rightNumber} >{vaga.number}</Text>
                </View>
              </View>
            )
          })}
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

  vagaText: {
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center"
  },

  leftNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFF',
    transform: [{ rotate: '270deg' }]
  },

  oldman: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFF',
    transform: [{ rotate: '270deg' }]
  },

  iconLeft: {
    transform: [{ rotate: '270deg' }]
  },

  iconRight: {
    transform: [{ rotate: '90deg' }]
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