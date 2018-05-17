import React, { Component } from 'react';

const KanbanForm = ({ submitHandler }) => {
    let _kanbanTitle, _kanbanDateBegin, _kanbanDateEnd, _kanbanDescription;
    const handleSubmit = (e) => {
        submitHandler(e, {
            title: _kanbanTitle.value,
            dateBegin: _kanbanDateBegin.value,
            dateEnd: _kanbanDateEnd.value,
            description: _kanbanDescription.value
        }
        );
        clearForm();
    }

    const clearForm = () => {
        _kanbanDateBegin.value = '';
        _kanbanDateEnd.value = '';
        _kanbanDescription.value = '';
        _kanbanTitle.value = '';
    }

    return (
        <form onSubmit={handleSubmit} className="form-inline">
            <label className="sr-only" for="inlineFormInputName2">Título</label>
            <input type="text" ref={input => _kanbanTitle = input} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Título" />

            <label className="sr-only" for="inlineFormInputName2">Data Início</label>
            <input type="text" ref={input => _kanbanDateBegin = input} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Data Início" />

            <label className="sr-only" for="inlineFormInputName2">Data Final</label>
            <input type="text" ref={input => _kanbanDateEnd = input} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Data Final" />

            <label className="sr-only" for="inlineFormInputName2">Descrição</label>
            <input type="text" ref={input => _kanbanDescription = input} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Descrição" />

            <button type="submit" className="btn btn-primary mb-2">Adicionar</button>
        </form>
    )
};

export default KanbanForm;