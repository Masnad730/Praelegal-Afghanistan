import axios from 'axios'

export async function getAllPractices() {
  const practices = await axios
    .get('http://wpbackend.navisa.af/wp-json/wp/v2/praelegal-practices/?per_page=100')
    .then((res) => res.data)
    .catch((err) => {
      console.log(err)
    })

  return practices
}
export async function getAllPracticesCustomFields() {
  const practices = await axios
    .get(
      'http://wpbackend.navisa.af/wp-json/wp/v2/praelegal-practices/?per_page=100&_fields[]=slug&_fields[]=acf'
    )
    .then((res) => res.data)
    .catch((err) => {
      console.log(err)
    })

  return practices
}
export async function getAllSuperioritiesCustomFields() {
  const superiorities = await axios
    .get(
      'http://wpbackend.navisa.af/wp-json/wp/v2/praelegal-why-us/?per_page=100&_fields[]=title&_fields[]=acf'
    )
    .then((res) => res.data)
    .catch((err) => {
      console.log(err)
    })

  return superiorities
}
