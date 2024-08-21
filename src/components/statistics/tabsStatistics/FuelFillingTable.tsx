import useAppSelector from "../../../hooks/useAppSelector"

const FuelFillingTable = () => {
  const FuelFillings = useAppSelector((state) => state.fuels.fuels || []);

  return (
    <div className="infoStats">
      {
        FuelFillings && FuelFillings.length > 0 ? (
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
              {FuelFillings.map((fuel) => (
                <tr key={fuel.id}>
                  <td>{new Date(fuel.date).toLocaleDateString()}</td>
                  <td>{fuel.amount}</td>
                  <td>{fuel.price}</td>
                  <td>{fuel.mileage}</td>
                  <td>{(fuel.price !== 0) ? ((fuel.amount / fuel.price).toFixed(2)) : '-'}</td>
                  <td>{fuel.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h2 className='mt-1r'>Нет данных о заправках</h2>
        )
      }
    </div>
  )

}
export default FuelFillingTable