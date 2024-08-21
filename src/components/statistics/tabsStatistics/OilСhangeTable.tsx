import useAppSelector from "../../../hooks/useAppSelector"

const OilСhangeTable = () => {
    const oilСhanges = useAppSelector((state) => state.oilChange.oilChanges || []);

    return (
        <div className="infoStats">
        {
          oilСhanges && oilСhanges.length > 0 ? (
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
                {oilСhanges.map((oilChange) => (
                  <tr key={oilChange.id}>
                    <td>{new Date(oilChange.date).toLocaleDateString()}</td>
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
            <h2 className='mt-1r'>Нет данных о замене масла</h2>
          )
        }
      </div>
    )

}
export default OilСhangeTable