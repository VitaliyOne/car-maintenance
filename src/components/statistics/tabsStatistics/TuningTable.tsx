import useAppSelector from "../../../hooks/useAppSelector"

const TuningTable = () => {
    const tuning = useAppSelector((state) => state.tuning.tuning || []);

    return (
        <div className="infoStats">
        {
          tuning && tuning.length > 0 ? (
            <table style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th>Дата</th>
                  <th>Вид тюнинга</th>
                  <th>Сумма затрат</th>
                  <th>Пробег</th>
                  <th>Разгон 0-100</th>
                  <th>Разгон 10-20</th>
                  <th>Описание</th>
                </tr>
              </thead>
              <tbody>
                {tuning.map((tuningInfo) => (
                  <tr key={tuningInfo.id}>
                    <td>{new Date(tuningInfo.date).toLocaleDateString()}</td>
                    <td>{tuningInfo.typeTuning}</td>
                    <td>{tuningInfo.price}</td>
                    <td>{tuningInfo.consumables}</td>
                    <td>{tuningInfo.mileage}</td>
                    <td>{tuningInfo.acceleration1}</td>
                    <td>{tuningInfo.acceleration12}</td>
                    <td>{tuningInfo.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h1 style={{ margin: '15px 0' }}>Нет данных о тюнинге</h1>
          )
        }
        </div>
    )

}
export default TuningTable