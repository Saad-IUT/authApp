import React, { useState, useEffect } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import { Card, Button, Text, Avatar, Input } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons'
import NavBar from '../components/NavBar'
import globalStyles from '../styles/global'
import dayjs from 'dayjs'
import CommentCard from '../components/CommentCard'
import axios from 'axios'
const Comment = ({ navigation, route }) => {
  const { blogId, name, date, body, commentCount, likeCount } = route.params
  const [loading, setLoading] = useState(false)
  const [comment, setComment] = useState('')

  const handleComment = () => {
    console.log('New comment')
    axios
      .post(
        `/blog/${blogId}/comment`,
        { body: 'I have commented' },
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQxMGM4ZjhiMGRjN2Y1NWUyYjM1NDFmMjllNWFjMzc0M2Y3N2NjZWUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYmxvZ2FwcDQ3IiwiYXVkIjoiYmxvZ2FwcDQ3IiwiYXV0aF90aW1lIjoxNjAzNjMyMzM3LCJ1c2VyX2lkIjoiRGxRTWgxM3hzWWdOR3dvSlFwcXd6MjBJSVRBMyIsInN1YiI6IkRsUU1oMTN4c1lnTkd3b0pRcHF3ejIwSUlUQTMiLCJpYXQiOjE2MDM2MzIzMzcsImV4cCI6MTYwMzYzNTkzNywiZW1haWwiOiJzYWFkQGl1dC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2FhZEBpdXQuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.HVtx_ol9kVYtU8BLEmnhKi2qHouYN9jntgBxqlwGmSgpGwLrDggS11ahimzTLI_ABO9YgKx82bd2oacK6aHBKrj_5N20ENcAVJevXyMq3taih6nVYKfl6IVC33fWyPaoEPXFH7leqKNRyIMW2ArqOFLr2WcVXcUWiCzjpfvpjymdQf42T_W7HJ5K3M1EBbGumnc4ksLpMDRAh69HqCAzFxhIA014iWWG17H2x_CsMeAYYGBYeunBVy1sEjvA7pYtXZfi6MBnf_Sdb1kUs1PR3657ju69qeMy5y5QKOsoJ1EKfbSOYC1WymbeN_u5F47J4FFctVu9bKn_c2WoM-QsiQ',
          },
        }
      )
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.error(err.response)
      })
  }
  const getOneBlog = () => {
    setLoading(true)
    axios
      .get(`/blog/${blogId}`)
      .then(res => {
        setComment(res.data.comments)
        setLoading(false)
      })
      .catch(err => {
        console.error(err.response)
      })
  }
  useEffect(() => {
    getOneBlog()
  }, [])
  return (
    <View style={globalStyles.viewStyle}>
      <NavBar navigation={navigation} />
      <Card>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Avatar
            containerStyle={{ backgroundColor: '#ffab91' }}
            rounded
            icon={{ name: 'user', type: 'font-awesome', color: 'black' }}
            activeOpacity={1}
          />
          <Text h4Style={{ padding: 10 }} h4>
            {name}
          </Text>
        </View>
        <Text style={{ fontStyle: 'italic' }}>
          {dayjs(date).format('[Posted on] DD MMM,YYYY')}
        </Text>
        <Text
          style={{
            paddingVertical: 10,
          }}
        >
          {body}
        </Text>
        <Card.Divider />
        <Text>{` ${likeCount} Likes, ${commentCount} Comments`}</Text>
      </Card>
      <Card>
        <Input
          placeholder='Write Somethong!'
          leftIcon={<Entypo name='pencil' size={24} color='black' />}
        />
        <Button title='Comment' onPress={handleComment} />
      </Card>
      {loading ? (
        <Card>
          <ActivityIndicator size='large' color='blue' animating={true} />
        </Card>
      ) : (
        <FlatList
          data={comment}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <CommentCard
                name={item.userHandle}
                date={item.createdAt}
                body={item.body}
              />
            )
          }}
          keyExtractor={item => item.createdAt}
        />
      )}
      {!loading && !comment.length && (
        <Card>
          <Text style={{ textAlign: 'center' }}>
            Be the first to comment ☝
          </Text>
        </Card>
      )}
    </View>
  )
}

export default Comment
