import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Card, Text } from 'react-native-elements'
import { AuthContext } from '../context/providers/AuthProvider'
import dayjs from 'dayjs'
import axios from 'axios'
const CommentCard = ({ navigation, blogId }) => {
  const [name, setName] = useState('')
  const getOneBlog = () => {
    axios
      .get(`/blog/${blogId}`)
      .then(res => {
        console.log(res.data.comments[0])
        return res.data
      })
      .catch(err => {
        console.error(err.response)
      })
  }
  useEffect(() => {
    getOneBlog()
  }, [])
  return (
    <AuthContext.Consumer>
      {auth => (
        <Card>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              onPress={() => {
                // console.log(navigation)
                navigation.navigate('Static Profile')
              }}
            >
              <Text
                h4Style={{ padding: 10, fontWeight: 'bold', fontSize: 22 }}
                h4
              >
                Shakif
              </Text>
            </TouchableOpacity>
            <Text style={{ fontStyle: 'italic' }}>
              {/* {dayjs(date).format('(DD/MM/YYYY)')} */}
            </Text>
          </View>
          <Text
            style={{
              paddingVertical: 10,
            }}
          >
            This is a comment
          </Text>
        </Card>
      )}
    </AuthContext.Consumer>
  )
}

export default CommentCard
