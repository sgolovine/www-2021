export const SettingsUI: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center py-4">Settings</h1>
      <p className="text-center">
        The numbers that this app uses to calculate payouts. If you believe them
        to be incorrect you can change them here
      </p>
      <hr className="my-6" />
      <h2 className="text-lg font-bold py-4">Primary Target Values</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Target</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tequilla</td>
            <td>
              <input type="text" className="border" />
            </td>
          </tr>
          <tr>
            <td>Ruby Necklace</td>
            <td>
              <input type="text" className="border" />
            </td>
          </tr>
          <tr>
            <td>Bearer Bonds</td>
            <td>
              <input type="text" className="border" />
            </td>
          </tr>
          <tr>
            <td>Pink Diamond</td>
            <td>
              <input type="text" className="border" />
            </td>
          </tr>
          <tr>
            <td>Black Panther</td>
            <td>
              <input type="text" className="border" />
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-lg font-bold py-4">
        Secondary Target Values and Weights
      </h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Target</th>
            <th>Value</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cash</td>
            <td>
              <input type="text" className="border" />
            </td>
            <td>
              <input type="text" className="border" />
            </td>
          </tr>
          <tr>
            <td>Weed</td>
            <td>
              <input type="text" className="border" />
            </td>
            <td>
              <input type="text" className="border" />
            </td>
          </tr>
          <tr>
            <td>Painting</td>
            <td>
              <input type="text" className="border" />
            </td>
            <td>
              <input type="text" className="border" />
            </td>
          </tr>
          <tr>
            <td>Cocaine</td>
            <td>
              <input type="text" className="border" />
            </td>
            <td>
              <input type="text" className="border" />
            </td>
          </tr>
          <tr>
            <td>Gold</td>
            <td>
              <input type="text" className="border" />
            </td>
            <td>
              <input type="text" className="border" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
