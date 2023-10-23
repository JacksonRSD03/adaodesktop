import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { TodoForm } from '../components/forms/TodoForm';
import { data } from '../services/data'
import ITask from '../interfaces/ITask';

const Work: React.FC = () => {
  const ipcRenderer = (window as any).ipcRenderer;
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [loading, setLoading] = useState(false);

  const setup = async () => {
    setLoading(true);
    const resp = await axios.get('http://127.0.0.1:8000/api/task');
    setTasks(tasks.concat(resp.data));
    setLoading(false);
  };
  useEffect(() => {
    setup();
    ipcRenderer.on('task:added', (event: any, data: any) => {
      setup();
    });
  }, []);

  return (
    <div className='bg-gray-100 min-h-screen'>

    <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>

            <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                <span>Item de Inspeção</span>
                <span className='sm:text-left text-right'>Valor de fábrica</span>
                <span className='hidden md:grid'>Valor de leitura</span>
                <span className='hidden sm:grid'>Resultado da inspeção</span>
            </div>
            <ul>
                {data.map((order, id) => (
                    <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>

                        <div className='flex items-center'>


                            <p className='pl-4 font-semibold '>{order.name.first + ' ' + order.name.last}</p>
                        </div>

                        <p className='text-gray-600 sm:text-left text-right'>{order.value}</p>

                        <p className='hidden md:flex'>{order.learn}</p>
                        <p className='hidden md:flex'>{order.status}</p>

                        <div className='hidden sm:flex justify-between items-center'>
                           

                        </div>
                    </li>
                ))}
            </ul>
        </div>

    </div>
    <div className='p-4 flex flex-row'>
        <div className='basis-1/3 mr-5 m-2'>
            <div className="card h-47  bg-primary  basis-1/2">
                <div className='flex flex-row p-3'>


                    <h2 className="card-title pl-4 text-white">Resultados</h2>
                    <div className=" ml-5">

                        <div className="stat bg-primary">
                            <div className="stat-title"></div>
                            <div className="stat-value font-normal text-white">Parabéns, seu dispositivo </div>
                            <br /><div className="stat-value font-normal text-white"> está em ótimo estado!</div>
                            <div className="stat-desc text-white" >Entre 21% dos aparelhos </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
        <ul className='basis-2/3 pr-5'>

            <li key={3} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>

                <div className='flex items-center'>


                    <p className='pl-4 font-semibold '> Data de Produção</p>
                </div>

                <p className='text-gray-600 sm:text-left text-right'> 22/02/2023</p>

            </li>
            <li key={3} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>

                <div className='flex items-center'>


                    <p className='pl-4 font-semibold '> Vezes carregado</p>
                </div>

                <p className='text-gray-600 sm:text-left text-right'> 321</p>

            </li>
            <li key={3} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>

                <div className='flex items-center'>


                    <p className='pl-4 font-semibold '> Versão do iOs</p>
                </div>

                <p className='text-gray-600 sm:text-left text-right'> 15.4.1</p>

            </li>
            <li key={3} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>

                <div className='flex items-center'>


                    <p className='pl-4 font-semibold '> Saúde da bateria</p>
                </div>

                <p className='text-gray-600 sm:text-left text-right'> 88%</p>

            </li>

        </ul>

    </div>

</div>
  );
};

export { Work };
