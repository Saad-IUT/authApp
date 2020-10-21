import React from 'react'
import { AuthContext } from '../providers/AuthProvider'

const PostCard = ({ navigation }) => {
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
            <Avatar
              containerStyle={{ backgroundColor: '#ffab91' }}
              rounded
              icon={{ name: 'user', type: 'font-awesome', color: 'black' }}
              activeOpacity={1}
            />
            <Text h4Style={{ padding: 10 }} h4>
              Jim Halpert
            </Text>
          </View>
          <Text style={{ fontStyle: 'italic' }}> Posted on 10 Aug, 2020</Text>
          <Text
            style={{
              paddingVertical: 10,
            }}
          >
            {post}
          </Text>
          <Card.Divider />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Button
              type='outline'
              title='  Like (21)'
              icon={<AntDesign name='like2' size={24} color='dodgerblue' />}
            />
            <Button title='Comment (7)' />
          </View>
        </Card>
      )}
    </AuthContext.Consumer>
  )
}

export default PostCard
