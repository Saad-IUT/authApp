import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Card, Text } from 'react-native-elements'
import dayjs from 'dayjs'

const CommentCard = ({ name, date, body }) => {
  return (
    <Card>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Static Profile')
          }}
        >
          <Text h4Style={{ padding: 10, fontWeight: 'bold', fontSize: 22 }} h4>
            {name}
          </Text>
        </TouchableOpacity>
        <Text style={{ fontStyle: 'italic' }}>
          {dayjs(date).format('(DD/MM/YYYY)')}
        </Text>
      </View>
      <Text
        style={{
          paddingVertical: 10,
        }}
      >
        {body}
      </Text>
    </Card>
  )
}

export default CommentCard
