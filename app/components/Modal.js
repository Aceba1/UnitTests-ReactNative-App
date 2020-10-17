import React, { useState } from 'react'
import { View, Text, Modal } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function ModalTest() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View >
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View >
          <View >
            <Text >Hello World!</Text>

            <TouchableHighlight
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text >Show Modal</Text>
      </TouchableHighlight>
    </View>
  );
};