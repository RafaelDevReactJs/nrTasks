import PropTypes from "prop-types";
import { useState } from "react";
import Modal from "../modal/Modal";
import Input from "../input/Input";

function AddTask(props) {
    const { addTask } = props;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleAddTask = () => {
        if (title.trim() === '' || description.trim() === '') {
            setShowModal(true);
            return;
        }
        addTask({ title: title.trim(), description: description.trim() });
        setTitle('');
        setDescription('');
    };

    return (
        <div className="space-y-4">
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Título</label>
                <Input 
                    type="text" 
                    placeholder="Digite o título da tarefa" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                />
                <p className="text-xs text-gray-500">Crie um título descritivo para sua tarefa</p>
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Descrição</label>
                <Input 
                    type="text" 
                    placeholder="Digite a descrição da tarefa" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                />
                <p className="text-xs text-gray-500">Adicione mais detalhes sobre a tarefa</p>
            </div>
            <button
                onClick={handleAddTask}
                className="w-full px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors font-medium text-sm shadow-md"
            >
                Adicionar tarefa
            </button>
            
            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                title="Campos obrigatórios"
                message="Por favor, preencha todos os campos antes de adicionar a tarefa."
                type="error"
            />
        </div>
    )
}

AddTask.propTypes = {
    addTask: PropTypes.func.isRequired,
};

export default AddTask;