import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/slices/counterSlice'
import { useEffect } from 'react';
import { fetchAllUsers } from './redux/slices/userSlice'

function App() {
  const dispatch = useDispatch();
  //const count = useSelector(state => state.counter.value);
  const listUsers = useSelector((state) => state.user.listUsers)
  const isLoading = useSelector((state) => state.user.isLoading)
  const isError = useSelector((state) => state.user.isError)

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and Hoi Dan IT!</h1>
        <div>
          <table>
            <thead>
              <th>ID</th>
              <th>Email</th>
              <th>Username</th>
            </thead>
            <tbody>

              {isError === true ?
                <>
                  <div>something wrongs</div>
                </>
                :
                <>
                  {isLoading === true ?
                    <>
                      <div>Loading...</div>
                    </>
                    :
                    <>
                      {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                          return (
                            <tr key={`listuser-${index}`}>
                              <td>{item.id}</td>
                              <td>{item.email}</td>
                              <td>{item.username}</td>
                            </tr>
                          )
                        })
                      }
                    </>
                  }
                </>
              }
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
