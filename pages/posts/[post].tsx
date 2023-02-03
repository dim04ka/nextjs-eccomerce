import Link from 'next/link';
import { useRouter } from 'next/router'
import { data } from '../../files'
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/globalContext'
import { useLocale } from '../../hooks'
import { productsListLocale } from '../../constants'
import { useDispatch } from 'react-redux';
import { increase } from '../../store/orders'


import Image from 'next/image';

export default function FirstPost(props) {

  const { language, t } = useLocale()
  const dispatch = useDispatch()

  const { setLoading, loading } = useContext(GlobalContext)

  const handleClick = () => {
    dispatch(increase({ id: Number(id) }))
    // console.log('111', loading)
    // setLoading(false)
  }

  const router = useRouter()
  const id = router.query.post as string
  console.log('slug', id)
  console.log('data', data)

  const current = productsListLocale[language].filter(el => el.id === +id)[0]
  const photo = current?.photo[0] || null
  console.log('current', photo)

  return (
    <>
      <Image
        src={photo}
        height={250}
        width={300}
        alt="english language"
      />
      <h1>First Post {current.title} {id} {loading ? 'true' : 'false'}</h1>
      <button onClick={handleClick}>btn</button>
      <Link href="/">back!</Link>
    </>
  )
}

export async function getServerSideProps(context) {

  return {
    props: {}, // will be passed to the page component as props
  }
}