import React, {useState} from "react";
import ProductCard from "./ProductCard";
import { Param, ParamValue, Model } from "./types";

interface Props {
  params: Param[];
  model: Model;
}

const ParamsEditor: React.FC<Props> = ({ params, model }) => {
   // Храним состояние значений параметров 
   const [paramValues, setParamValues] = useState<ParamValue[]>(
    model.paramValues
  );

  // Состояние для хранения измененных значений 
  const [changedValues, setChangedValues] = useState<ParamValue[]>(
    model.paramValues
  );

  // инициализируем состояние при загрузке компонента
  React.useEffect(() => {
    setChangedValues(model.paramValues);
  }, [model.paramValues]);

  // Функция для обновления состояния параметров
  const ParamChange = (paramId: number, value: string) => {
    // Проходимся по массиву paramValues для каждого параметра, проверяем совпадает ли его id с paramId, который мы передали в функцию
    const updatedParamValues = paramValues.map((param) => {
      // Если id параметра совпадает с id названия этого параметра
      if (param.paramId === paramId) {
        // Если совпадает, то записываем новое значение, оставляя другие параметры без изменений
        return { ...param, value };
      }
      // Если не совпадает, то оставляем параметр без изменений
      return param;
    })

    // Обновляем состояние paramValues
    setParamValues(updatedParamValues);
  };

  // Функция для получения модели 
  const getModel = () => {
    // Сохраняем их в состояние
    setChangedValues(paramValues);
  };

  return (
    <div className="params_editor">
        {/* Проходимся по каждому элементу массива params и выводим названия параметров */}
        <div className="edit__form">
        {params.map((param) => (
          <div className="edit__form__body" key={param.id}>
            <label className="edit__form__label label">{param.name}</label>
            <input
              className="edit__form__input input"
              type="text"
              // Отображаем в input текущее значение параметра иначе дефолтное иначе пустая строка
              value={
                paramValues.find(
                  (paramValue) => paramValue.paramId === param.id
                )?.value || ""
              }
              // Принимаем id названия параметра и его новое значение, передаем в функцию ParamChange
              onChange={(e) => ParamChange(param.id, e.target.value)}
            />
          </div>
        ))}
        <div className="edit__form__button button">
          <button className="params-editor__button button" onClick={getModel}>
            Сохранить
          </button>
        </div>
      </div>

      <ProductCard params={params} changedValues={changedValues} />
    </div>
  );
};
  export default ParamsEditor;