import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E6E6F0',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden'
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#EEE'
  },

  profileInfo: {
    marginLeft: 16
  },

  name: {
    fontFamily: 'Archivo_700Bold',
    color: '#32264D',
    fontSize: 20
  },

  subject: {
    fontFamily: 'Poppins_400Regular',
    color: '#6A6180',
    fontSize: 12,
    marginTop: 4
  },

  bio: {
    fontFamily: 'Poppins_400Regular',
    color: '#6A6180',
    fontSize: 14,
    lineHeight: 24,
    marginHorizontal: 24
  },

  footer: {
    backgroundColor: '#FAFAFC',
    alignItems: 'center',
    padding: 24,
    marginTop: 16
  },

  price: {
    fontFamily: 'Poppins_400Regular',
    color: '#6A6180',
    fontSize: 14
  },

  priceValue: {
    fontFamily: 'Archivo_700Bold',
    color: '#8257E5',
    fontSize: 16
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16
  },

  favoriteButton: {
    backgroundColor: '#8257E5',
    width: 56,
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8
  },

  favorited: {
    backgroundColor: '#E33D3D'
  },

  contactButton: {
    backgroundColor: '#04D361',
    flex: 1,
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8
  },

  contactButtonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 16,
    marginLeft: 16
  }
})

export default styles
