import React,{useEffect, useState} from 'react'

 const API_URL = 'https://6900d2e2ff8d792314bba4dd.mockapi.io/api/users';

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingId, setIditingId] = useState(null);
    const [formData, setformData] = useState({
        name: '',
        avatar: '',
        horse: '' 
    });
    useEffect(() =>{
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setUsers(data);
            setLoading(false);
        }
        catch (error){
            console.error("Ошибка загрузки: ", error);
            setLoading(false);
        }
    }

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
                });
            const  newUser = await response.json();
            setUsers([...users, newUser]);
            setformData({name: '', avatar: '', horse: ''});
    }
    catch(error){
    console.error('Ошибка добавления: ', error);
    }   
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/${editingId}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
                });
            const  upDateUser = await response.json();
            setUsers(users.map(u => u.id == editingId ? upDateUser: u));
            setIditingId(null);
            setformData({name: '', avatar: '', horse: ''});
    }
    catch(error){
    console.error('Ошибка обновления: ', error);
    }   
    };
    
    const handleDelete = async (id) => {
        if (!window.confirm('Удалить этого пользователя?')) return;
        try {
            await fetch(`${API_URL}/${id}`, {method: 'DELETE'});
            setUsers(users.filter(u => u.id != id));
        }
        catch(error){
            console.error('Ошибка удаления', error);
        }
    };
    const startEdit = (user) => {
        setIditingId(user.id);
        setformData({
            name: user.name,
            avatar: user.avatar,
            horse: user.horse
        })
    }

  return (
    <div>
      <h2 className='text-center mb-4'>Управление пользователями</h2>
      <div classname='card mb-4'>
        <div className='card-body'>
            <h5 className='card-title'>{editingId ? 'Редактирование пользователя' : 'Добавление пользователя'}</h5>
            <form onSubmit={editingId ? handleUpdate : handleAdd}>
                <div className='mb-3'>
                    <input
                    type='text'
                    className='form-control'
                    placeholder='Имя'
                    value={formData.name}
                    onChange={(e) => setformData({...formData, name: e.target.value})}
                required/>
                    <input
                        type='url'
                        className='form-control'
                        placeholder='URL- аватар'
                        value={formData.avatar}
                        onChange={(e) => setformData({...formData, avatar: e.target.value})}
                    required/>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Любимая порода лощади'
                        value={formData.horse}
                        onChange={(e) => setformData({...formData, horse: e.target.value})}
                    required/>
                </div>
                <div className='d-flex gap-2'>
                    <button type='submite' className='btn-primary'>
                        {editingId ? 'Сохранить' : 'Добавить'}
                    </button>
                </div>
            </form>
        </div>
      </div>
      <h5 className='mb-3'>Все пользователи ({users.length})</h5>
      <div className='row g-3'>
        {users.map((user) => (
            <div className='col-md-6' key={user.id}>
                <div className='card h-100'>
                    <div className='card-body'>
                        <div className='d-flex align-items-start mb-3'>
                            <img
                            src={user.avatar}
                            alt={user.name}
                            className='rounded-circle'
                            width='64'
                            height='64'
                            style={{objectFit: 'cover'}}
                            ></img>
                            <div className='flex-grow-1'>
                                <h5 className='card-title mb-1'>{user.name}</h5>
                                <p className='card-text mb-0'>
                                    <b>Любимая порода лощадей:  {user.horse}</b>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='card-footer bg-transparent'>
                        <button className='btn btn-warning me-2' onClick={() => startEdit(user)}>Изменить</button>
                        <button className='btn btn-danger me-2' onClick={()=> handleDelete(user.id)}>Удалить</button>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default UsersPage

