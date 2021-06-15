import trees from '../img/trees.png'

const SecOne = () => {
  return (
    <section className="section-bg-primary">
      <div className="container">
        <div className="counter-container">
          <div className="counter-stats">
            {/* Product stats */}
            <div className="stats">
              <div>
                <span id="prod-stats"></span>%
              </div>
              <p>Increase in productivity</p>
            </div>

            {/* Cost reduction stats */}
            <div className="stats">
              <div>
                <span id="cost-reduction"></span>%
              </div>
              <p>Cost Reduction</p>
            </div>

            {/* Customer stats */}
            <div className="stats">
              <div>
                <span id="customer-stats"></span>+
              </div>
              <p>Global enterprise customers</p>
            </div>
          </div>
          <div className="stats-img">
            <img src={trees} alt="trees" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecOne
