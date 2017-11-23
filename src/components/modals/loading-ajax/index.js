import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Modal from 'react-native-modal';

export default function LoadingModal (props) {
  return (
    <View style={styles.container}>
      <Modal {...props}>
        <View style={styles.modalContent}>
          <Text>Loading</Text>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  }
})