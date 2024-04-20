import "../layouts/Style/wapperList.css"; 

export const List = (props) => {
    const { children } = props
    return (
      <div>
        <h2>Compras de la Semana</h2>
        <div>
          { children }
        </div>
      </div>
    )
  }

