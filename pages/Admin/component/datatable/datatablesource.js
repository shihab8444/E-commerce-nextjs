import styles from './datatable.module.scss'
export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'user',
    headerName: 'User',
    width: 230,
    renderCell: (params) => {
      return (
        <div className='flex items-center'>
          <img
            className='w-8 h-8 rounded-full object-cover mr-5'
            src={params.row.img}
            alt='avatar'
          />
          {params.row.username}
        </div>
      )
    },
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 230,
  },

  {
    field: 'age',
    headerName: 'Age',
    width: 100,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
    renderCell: (params) => {
      return <div className={styles.cellWithStatus}>{params.row.status}</div>
    },
  },
]

//temporary data
export const userRows = [
  {
    id: 1,
    username: 'Snow',
    img: '/assets/onepiece.jpg',
    status: 'active',
    email: '1snow@gmail.com',
    age: 35,
  },
  {
    id: 2,
    username: 'Jamie Lannister',
    img: '/assets/onepiece.jpg',
    email: '2snow@gmail.com',
    status: 'passive',
    age: 42,
  },
  {
    id: 3,
    username: 'Lannister',
    img: '/assets/onepiece.jpg',
    email: '3snow@gmail.com',
    status: 'pending',
    age: 45,
  },
  {
    id: 4,
    username: 'Stark',
    img: '/assets/onepiece.jpg',
    email: '4snow@gmail.com',
    status: 'active',
    age: 16,
  },
  {
    id: 5,
    username: 'Targaryen',
    img: '/assets/onepiece.jpg',
    email: '5snow@gmail.com',
    status: 'passive',
    age: 22,
  },
  {
    id: 6,
    username: 'Melisandre',
    img: '/assets/onepiece.jpg',
    email: '6snow@gmail.com',
    status: 'active',
    age: 15,
  },
  {
    id: 7,
    username: 'Clifford',
    img: '/assets/onepiece.jpg',
    email: '7snow@gmail.com',
    status: 'passive',
    age: 44,
  },
  {
    id: 8,
    username: 'Frances',
    img: '/assets/onepiece.jpg',
    email: '8snow@gmail.com',
    status: 'active',
    age: 36,
  },
  {
    id: 9,
    username: 'Roxie',
    img: '/assets/onepiece.jpg',
    email: 'snow@gmail.com',
    status: 'pending',
    age: 65,
  },
  {
    id: 10,
    username: 'Roxie',
    img: '/assets/onepiece.jpg',
    email: 'snow@gmail.com',
    status: 'active',
    age: 65,
  },
]
