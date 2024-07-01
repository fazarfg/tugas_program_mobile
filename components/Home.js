import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Contact from './Contact';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Contact
          gambar={require('../assets/botak.jpg')}
          judul="David Googins"
          telpon="0765535531"
          deskripsi="David Googins adalah seorang olahragawan yang telah mencapai banyak world record."
          navigation={navigation}
        />
        <Contact
          gambar={require('../assets/ibu.jpg')}
          judul="Siti"
          telpon="0765535532"
          deskripsi="Siti adalah seorang mahasiswi berprestasi yang aktif dalam berbagai kegiatan kampus."
          navigation={navigation}
        />
         <Contact
          gambar={require('../assets/Fazar.jpeg')}
          judul="Fazar Fasca Gumilang"
          telpon="058673247243"
          deskripsi="Fazar Fasca Gumilang adalah seorang Mahasiswa UMMI Kota Sukabumi dengan jurusan Teknik Informatika."
          navigation={navigation}
        />
         <Contact
          gambar={require('../assets/Yubeng.jpeg')}
          judul="Ubang"
          telpon="0896876957"
          deskripsi="Ubang adalah seorang Mahasiswa UMMI Kota Sukabumi dengan jurusan Teknik Informatika."
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20
  },
});

export default Home;
