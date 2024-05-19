import Stats from '/stats.svg';
import useAppSelector from "../hooks/useAppSelector";

const Statistics = () => {
  const dateTime = useAppSelector((state) => state.localTime.time)
  const cars = useAppSelector((state) => state.cars.cars || []);
  const fuelsInfo = useAppSelector((state) => state.fuels.fuels || []);
  const oilChangeInfo = useAppSelector((state) => state.oilChange.oilChanges)

  return (
    <section>
      <time className="time"><img src={Stats} alt="IconRepairCosts" style={{ height: "30px" }} /> &nbsp;{dateTime}</time>
      {cars && cars.length > 0 ? <h1 style={{ margin: '15px 0' }}>Выбран авто: {cars[0].name}</h1> : <h1 style={{ margin: '15px 0' }}>Для просмотра статискики необходимо выбрать авто</h1>}
      <div className="infoStats">
        {
          fuelsInfo && fuelsInfo.length > 0 ? (
            <table style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th>Дата</th>
                  <th>Сумма заправки</th>
                  <th>Цена за литр</th>
                  <th>Пробег</th>
                  <th>Литры</th>
                  <th>Комментарий</th>
                </tr>
              </thead>
              <tbody>
                {fuelsInfo.map((fuel) => (
                  <tr key={fuel.id}>
                    <td>{new Date(fuel.id).toLocaleDateString()}</td>
                    <td>{fuel.amount}</td>
                    <td>{fuel.price}</td>
                    <td>{fuel.mileage}</td>
                    <td>{(fuel.amount / fuel.price).toFixed(2)}</td>
                    <td>{fuel.comment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h1 style={{ margin: '15px 0' }}>Нет данных о заправках</h1>
          )
        }
      </div>
      <div className="infoStats">
        {
          oilChangeInfo && oilChangeInfo.length > 0 ? (
            <table style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th>Дата</th>
                  <th>Пробег</th>
                  <th>Цена</th>
                  <th>Вязкость</th>
                  <th>Тип</th>
                  <th>Комментарий</th>
                </tr>
              </thead>
              <tbody>
                {oilChangeInfo.map((oilChange) => (
                  <tr key={oilChange.id}>
                    <td>{new Date(oilChange.id).toLocaleDateString()}</td>
                    <td>{oilChange.mileage}</td>
                    <td>{oilChange.price}</td>
                    <td>{oilChange.oilViscosity}</td>
                    <td>{(oilChange.oilType)}</td>
                    <td>{oilChange.comment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h1 style={{ margin: '15px 0' }}>Нет данных о замене масла</h1>
          )
        }
      </div>
    </section>
  )
}

export default Statistics