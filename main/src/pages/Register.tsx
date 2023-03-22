const Register = () => {
    const center={
        display: "flex",justifyContent:"center",margin:"0 auto"
    }
    return (
        <div style={center}>
            <label htmlFor="no">Hey</label>
            <input type="text" id="no"/>

            <label htmlFor="n">Cars</label>
            <select name="cars" id="n">
                <option value="chevy">Chevy</option>
                <option value="Altima">Altima</option>
                <option value="Sonata">Sonata</option>
            </select>
        </div>
    );
}

export default Register;