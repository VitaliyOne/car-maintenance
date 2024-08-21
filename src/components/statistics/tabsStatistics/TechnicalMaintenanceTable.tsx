import useAppSelector from "../../../hooks/useAppSelector"

const TechnicalMaintenanceTable = () => {
    const technicalMaintenances = useAppSelector((state) => state.technicalMaintenance.technicalMaintenances)

    return (
        <div className="infoStats">
        {
          technicalMaintenances && technicalMaintenances.length > 0 ? (
            <table style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th>Дата</th>
                  <th>Вид обслуживания</th>
                  <th>Стоимость работ</th>
                  <th>Расходные материалы</th>
                  <th>Артикул</th>
                  <th>Цена запчасти</th>
                  <th>Пробег</th>
                  <th>Комментарий</th>
                </tr>
              </thead>
              <tbody>
                {technicalMaintenances.map((technicalMaintenances) => (
                  <tr key={technicalMaintenances.id}>
                    <td>{new Date(technicalMaintenances.date).toLocaleDateString()}</td>
                    <td>{technicalMaintenances.typeService}</td>
                    <td>{technicalMaintenances.priceWork}</td>
                    <td>{technicalMaintenances.consumables}</td>
                    <td>{technicalMaintenances.vendorСode}</td>
                    <td>{technicalMaintenances.price}</td>
                    <td>{technicalMaintenances.mileage}</td>
                    <td>{technicalMaintenances.comment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h2 className='mt-1r'>Нет данных об обслуживании</h2>
          )
        }
        </div>
    )

}
export default TechnicalMaintenanceTable