import useAppSelector from "../../../hooks/useAppSelector"

const RepairCostsTable = () => {
    const repairCosts = useAppSelector((state) => state.repairCosts.repairCosts || []);

    return (
        <div className="infoStats">
        {
          repairCosts && repairCosts.length > 0 ? (
            <table style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th>Дата</th>
                  <th>Вид раемонта</th>
                  <th>Стоимость работ</th>
                  <th>Запчасть</th>
                  <th>Артикул запчасти</th>
                  <th>Цена запчасти</th>
                  <th>Пробег</th>
                  <th>Комментарий</th>
                </tr>
              </thead>
              <tbody>
                {repairCosts.map((repairCosts) => (
                  <tr key={repairCosts.id}>
                    <td>{new Date(repairCosts.date).toLocaleDateString()}</td>
                    <td>{repairCosts.typeRepair}</td>
                    <td>{repairCosts.priceWork}</td>
                    <td>{repairCosts.replacementPart}</td>
                    <td>{repairCosts.vendorСode}</td>
                    <td>{repairCosts.price}</td>
                    <td>{repairCosts.mileage}</td>
                    <td>{repairCosts.comment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h1 style={{ margin: '15px 0' }}>Нет данных о ремонтах</h1>
          )
        }
      </div>
    )

}
export default RepairCostsTable