import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

export const Flags = () => {
  return (
    <div className={styles.wrapper}>

      <Link href="/" locale="en">
        <Image
          src="/images/flag_en.png"
          height={25}
          width={30}
          alt="english language"
        />
      </Link>
      <Link href="/" locale="ru">
        <Image
          src="/images/flag_ru.png"
          height={25}
          width={30}
          alt="russian language"
        />
      </Link>
      <Link href="/" locale="ge">
        <Image
          src="/images/flag_ge.png"
          height={25}
          width={30}
          alt="georgian language"
        />
      </Link>
    </div>
  )
}