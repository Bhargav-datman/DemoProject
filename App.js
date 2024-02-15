import {Text, TextInput, TouchableOpacity, View} from 'react-native';

const App = () => {
  const bhargavClick = () => {
    console.log('handle navigation to another screen');
  };

  return (
    <View
      style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <TouchableOpacity onPress={bhargavClick()}>
        <Text style={{fontSize: 40}}>{'bhargav'}</Text>
      </TouchableOpacity>
      <TextInput
        placeholder={'enter your field name'}
        placeholderTextColor={'red'}
        selectionColor={'blue'}
        style={{
          borderColor: 'yellow',
          borderWidth: 2,
          width: '80%',
        }}
      />
    </View>
  );
};
export default App;
