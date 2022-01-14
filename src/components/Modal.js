import React, {useEffect, useState} from 'react';
import { Col, Row } from 'reactstrap';
import swal from 'sweetalert';
import api from '../util/api';
import ModalContainer from './ModalContainer';
import { loadStripe } from '@stripe/stripe-js';

const truck = '/assets/images/truck.svg';
const cancel = '/assets/images/cancelar.svg';
const arrow = '/assets/images/right-arrow.svg';

const stripePromisse = loadStripe("pk_test_51HmRE6B33GT7FoFN2HEYNSzPPSkx2oE3kJUmkPJ5Q0NlJFRec9aE6OJHmmSTeWgphWzp0IIOqkX2AJPZCKPR8n0u00tNDXZpVe");

export default function Modal({set, select}){
    const [name, setName] = useState('');
    const [street, setStreet] = useState('');
    const [stateCode, setStateCode] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [unit, setUnit] = useState('');

    const [autoaddr, setAutoaddr] = useState('')

    const [email, setEmail] = useState('');
    const [emailReq, setEmailReq] = useState(false);
    const [phone, setPhone] = useState('');
    const [phoneReq, setPhoneReq] = useState(false);

    const [nameReq, setNameReq] = useState(false);
    const [streetReq, setStreetReq] = useState('');
    const [stateCodeReq, setStateCodeReq] = useState('');
    const [cityReq, setCityReq] = useState('');
    const [postalCodeReq, setPostalCodeReq] = useState('');

    const [productName, setProductName] = useState('');

    const [page, setPage] = useState(0);

    const [loading, setLoading] = useState(false);

    const [calculed, setCalculed] = useState(false);

    const [shipping, setShipping] = useState(0);

    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);

    const [sessionId, setSessionId] = useState('');

    const [verificated, setVerificated] = useState(false);

    useEffect(() => {
        setVerificated(nameReq || emailReq || phoneReq || stateCodeReq || cityReq || postalCodeReq);
    }, [nameReq, emailReq, phoneReq, stateCodeReq, cityReq, postalCodeReq]);

    console.log(select, productName);

    console.log(data);
    

    const selectHandle = (item) => {
        if(item.terms[3].value === 'USA'){
            const itemStreet = item.terms[0].value;
            const itemCity = item.terms[1].value;
            const itemStateCode = item.terms[2].value
        }

    }

    // EigzNyBFYXN0IFZpY3RvcmlhIFN0cmVldCwgUmlhbHRvLCBDQSwgVVNBIlASTgo0CjIJN-YS8ntNw4AR519E9Y1OogsaHgsQ7sHuoQEaFAoSCYsHq38NTcOAEaXDyGk7HHS1DBAlKhQKEglPpCd-fU3DgBFKSdbFaHMKVA

    useEffect(() => {
        switch(select){
            case 99.99:
                setProductName('1 box 25 T8 bulbs $4.00 each: $99.99*');
                break;
            case 249.99:
                setProductName('3 box 25 T8 bulbs $3.33 each: $249.99*');
                break;
            case 349.99:
                setProductName('5 box 25 T8 Bulbs $2.80 each: $349.99*');
                break;
        }
    }, []);
    // useEffect(() => {
    //     axios(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${search}&key=AIzaSyDJd-BKhdcGKcdmDa8PB7xBd3GdfNU78Ng&types=address&country=usa`).then(res => {
    //         setData(res.data.predictions);
    //     }).catch(e => console.log(e));
    // }, [search]);

    const payment = () => {
        const total = (((Number(shipping) + Number(select)) * 0.07) + (Number(shipping) + Number(select))).toFixed(2);
        const tax = ((Number(shipping) + Number(select)) * 0.07).toFixed(2);

        console.log(total)


        const data = {
            final_amount: total * 100,
            name_product: productName,

            customer_email: email,
            customer_full_name: name,
            customer_address: street,
            customer_state_code: stateCode,
            customer_city: city,
            customer_postal_code: postalCode,
            customer_unit: unit,
            customer_shipping_cost: shipping,
            customer_phone: phone,
            customer_tax: tax,
            customer_product_price: select,
            customer_final_amount: total
        }

        api.post("https://api.ledlampliquidators.com/api/stripe", data).then(async res => {
            const obj = {
                final_amount: total * 100,
            name_product: productName,

            customer_email: email,
            customer_full_name: name,
            customer_address: street,
            customer_state_code: stateCode,
            customer_city: city,
            customer_postal_code: postalCode,
            customer_unit: unit,
            customer_shipping_cost: shipping,
            customer_phone: phone,
            customer_tax: tax,
            customer_product_price: select,
            customer_final_amount: total,
            payment_intent: res.data.payment_intent
            };
            const json = JSON.stringify(obj);
            sessionStorage.setItem('data', json);
            const session = res.data.id;
            const stripe = await stripePromisse;
            const result = await stripe.redirectToCheckout({sessionId: session});
            if(result.error){
                window.location.href = '/error';
            }
        }).then(res => console.log(res)).catch(e => console.log(e));
    }

    const calculate = async (e) => {
        e.preventDefault();
        if(name.length === 0){
            await swal('Atention!', 'Name is required!', 'warning');
            return false;
        }
        if(street.length === 0){
            await swal('Atention!', 'Street is required!', 'warning');
            return false;
        }
        if(stateCode.length === 0){
            await swal('Atention!', 'State Code is required!', 'warning');
            return false;
        }
        if(city.length === 0){
            await swal('Atention!', 'City is required!', 'warning');
            return false;
        }
        if(postalCode.length === 0){
            await swal('Atention!', 'Postal code is required!', 'warning');
            return false;
        }
        setLoading(true);
        api.post('/api/ups', {
            Name: name,
            Address: {
                AddressLine: street + ' ' + unit,
                City: city,
                StateProvinceCode: stateCode,
                PostalCode: postalCode,
                CountryCode: "US"
            }
        }).then(res => {
            console.log(res.data.RateResponse.RatedShipment.TotalCharges.MonetaryValue);
            setShipping(res.data.RateResponse.RatedShipment.TotalCharges.MonetaryValue);
            setLoading(false);
            setCalculed(true);
        }).catch(e => {
            console.error(e);
            setLoading(false);
        });
    }
    const checkout = async (e) => {
        e.preventDefault();
        if(phone === '' || email === ''){
            await swal('Atention!', 'Fill in all fields', 'warning');
            return false;
        }
        setPage(2);
    }

    const requiredVerify = (value, nome) => {
        if(nome === 'name'){
            if(value.length === 0){
                setNameReq(true);
            }else {
                setNameReq(false);
            }
        }else if(nome === 'street'){
            if(value.length === 0){
                setStreetReq(true);
            }else {
                setStreetReq(false);
            }
        }else if(nome === 'stateCode'){
            if(value === 'none'){
                setStateCodeReq(true);
            }else {
                setStateCodeReq(false);
            }
        }else if(nome === 'city'){
            if(value.length === 0){
                setCityReq(true);
            }else {
                setCityReq(false);
            }
        }else if(nome === 'postalCode'){
            if(value.length === 0){
                setPostalCodeReq(true);
            }else {
                setPostalCodeReq(false);
            }
        }else if(nome === 'email'){
            if(value.length === 0){
                setEmailReq(true);
            }else {
                setEmailReq(false);
            }
        }else if(nome === 'phone'){
            if(value.length === 0){
                setPhoneReq(true);
            }else {
                setPhoneReq(false);
            }
        }
    }
    if(page === 0){
        return(
            <>
            <ModalContainer>
                <div className="modal-cont">
                    <div className="modal-header">
                        <h3>Calculate shipping cost</h3>
                    </div>
                    <div className="modal-input">
                        <Row>
                            <Col className="label-float">
                                    <input reqprop={nameReq ? 'yes' : ''} onChange={e => {
                                            setName(e.target.value);
                                            requiredVerify(name, 'name')
                                        }} value={name} type="text" placeholder="Full name" onBlur={() => requiredVerify(name, 'name')} />
                                    <div className="count">
                                        <p>{nameReq ? 'Name is required' : ''}</p>
                                        <p style={{opacity: 0}} id="normal">.</p>
                                    </div>
                                </Col>
                        </Row>
                        <Row>
                            <Col className="label-float" md={6}>
                                <input reqprop={streetReq ? 'yes' : ''} onChange={e => {
                                        setStreet(e.target.value);
                                        requiredVerify(street, 'street')
                                    }} value={street} type="text" placeholder="Street" onBlur={() => requiredVerify(street, 'street')} />
                                <div className="count">
                                    <p>{streetReq ? 'Street is required' : ''}</p>
                                    <p style={{opacity: 0}} id="normal">.</p>
                                </div>
                            </Col>  
                            <Col className="label-float" md={6}>
                                    <select reqprop={stateCodeReq ? 'yes' : ''} className="form-control" required onChange={e => {
                                        setStateCode(e.target.value);
                                        requiredVerify(stateCode, 'stateCode');
                                    }} value={stateCode}>
                                        <option selected value="none">Select your state</option>
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="DC">District Of Columbia</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WV">West Virginia</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY">Wyoming</option>
                                    </select>
                                <div className="count">
                                    <p>{stateCodeReq ? 'State code is required' : ''}</p>
                                    <p style={{opacity: 0}} id="normal">.</p>
                                </div>
                            </Col>  
                        </Row>
                        <Row>
                            <Col className="label-float" md={6}>
                                <input reqprop={cityReq ? 'yes' : ''} onChange={e => {
                                        setCity(e.target.value);
                                        requiredVerify(city, 'city')
                                    }} value={city} type="text" placeholder="City" onBlur={() => requiredVerify(city, 'city')} />
                                <div className="count">
                                    <p>{cityReq ? 'City is required' : ''}</p>
                                    <p style={{opacity: 0}} id="normal">.</p>
                                </div>
                            </Col>  
                            <Col className="label-float" md={6}>
                                <input reqprop={postalCodeReq ? 'yes' : ''} onChange={e => {
                                        setPostalCode(e.target.value);
                                        requiredVerify(postalCode, 'postalCode')
                                    }} value={postalCode} type="text" placeholder="Postal code" onBlur={() => requiredVerify(postalCode, 'postalCode')} />
                                <div className="count">
                                    <p>{postalCodeReq ? 'Postal code is required' : ''}</p>
                                    <p style={{opacity: 0}} id="normal">.</p>
                                </div>
                            </Col>  
                        </Row>
                        <Row>
                            <Col className="label-float">
                                    <input onChange={e => {
                                            setUnit(e.target.value);
                                        }} value={unit} type="text" placeholder="Unit/Apartment (Optional)" />
                                    <div className="count">
                                        <p style={{opacity: 0}} id="normal">.</p>
                                    </div>
                                </Col>
                        </Row>
                        <Row>
                            <Col>
                                <button onClick={calculate} style={{height: 40, border: 0, width: '100%', backgroundColor: loading ? '#8c8c8c' : '#7bd96c', fontSize: 19, fontWeight: 'bold', color: '#194024', borderRadius: 10, cursor: 'pointer'}} disabled={loading || verificated}>{loading ? 'Loading...' : 'Calculate'}</button>
                            </Col>
                        </Row>
                        <Row style={{marginTop: 30}} className="calculate align-items-center">
                            <Col md={1}>
                                <img src={truck} width="40px" />
                            </Col>
                            <Col className="calculator-results" md={11}>
                                <p style={{fontSize: 12}}>$calculated shipping cost:</p>
                                <p id="large">$ USD {shipping}</p>
                            </Col>
                        </Row>
                        <Row className="buttons-modal">
                            <Col md={2}>
                                <button style={{marginBottom: 10}} onClick={() => set(false)} id="cancel">
                                    <img src={cancel} width="20px" />
                                    Cancel
                                </button>
                            </Col>
                            <Col md={7}></Col>
                            <Col md={2}>
                                <button onClick={() => setPage(1)} disabled={!calculed} id="next">
                                    Next
                                    <img src={arrow} width="20px" />
                                </button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </ModalContainer>
            </>
        );
    }else if(page === 1){
        return(
            <>
        <ModalContainer>
            <div className="modal-cont">
                <div className="modal-header">
                    <h3>Contact Information</h3>
                </div>
                <div className="modal-input">
                    <Row>
                        <Col className="label-float">
                                <p style={{marginBottom: -4, fontSize: 13, color: '#8c8c8c'}}>Full Name</p>
                                <input value={name} disabled={true} style={{borderBottom: '1px dashed #8c8c8c'}} />
                                <div className="count">
                                    <p>{nameReq ? 'Name is required' : ''}</p>
                                    <p style={{opacity: 0}} id="normal">.</p>
                                </div>
                            </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col md={2}>
                            <p>E-mail: *</p>
                        </Col>
                        <Col className="label-float" md={10}>
                            <input reqprop={emailReq ? 'yes' : ''} onChange={e => {
                                    setEmail(e.target.value);
                                    requiredVerify(email, 'email')
                                }} value={email} type="text" placeholder="E-mail" onBlur={() => requiredVerify(email, 'email')} />
                            <div className="count">
                                <p>{emailReq ? 'Email is required' : ''}</p>
                                <p style={{opacity: 0}} id="normal">.</p>
                            </div>
                        </Col>   
                    </Row>
                    <Row className="align-items-center">
                        <Col md={2}>
                            <p>Phone: *</p>
                        </Col>
                        <Col className="label-float" md={10}>
                            <input reqprop={phoneReq ? 'yes' : ''} onChange={e => {
                                    setPhone(e.target.value);
                                    requiredVerify(phone, 'phone')
                                }} value={phone} type="text" placeholder="Phone" onBlur={() => requiredVerify(phone, 'phone')} />
                            <div className="count">
                                <p>{phoneReq ? 'Phone is required' : ''}</p>
                                <p style={{opacity: 0}} id="normal">.</p>
                            </div>
                        </Col>   
                    </Row>
                    <Row className="buttons-modal">
                        <Col md={2}>
                            <button onClick={() => setPage(0)} id="cancel">
                                <img src={arrow} style={{transform: 'rotate(180deg)'}} width="20px" />
                                Back
                            </button>
                        </Col>
                        <Col md={7}></Col>
                        <Col md={2}>
                            <button onClick={checkout} id="next">
                                Next
                                <img src={arrow} width="20px" />
                            </button>
                        </Col>
                    </Row>
                </div>
            </div>
        </ModalContainer>
        </>
        );
    }else if(page === 2){
        return(
            <>
            <ModalContainer>
                <div className="modal-cont">
                    <div className="modal-header">
                        <h3>Calculate shipping cost</h3>
                    </div>
                    <div className="modal-input">
                    <Row>
                        <Col className="label-float">
                                <p style={{marginBottom: -4, fontSize: 13, color: '#8c8c8c'}}>Full Name</p>
                                <input value={name} disabled={true} style={{borderBottom: '1px dashed #8c8c8c'}} />
                                <div className="count">
                                    <p>{nameReq ? 'Name is required' : ''}</p>
                                    <p style={{opacity: 0}} id="normal">.</p>
                                </div>
                            </Col>
                    </Row>
                    <Row>
                        <Col md={8} className="label-float">
                                <p style={{marginBottom: -4, fontSize: 13, color: '#8c8c8c'}}>Your e-mail</p>
                                <input value={email} disabled={true} style={{borderBottom: '1px dashed #8c8c8c'}} />
                                <div className="count">
                                    <p>{nameReq ? 'Name is required' : ''}</p>
                                    <p style={{opacity: 0}} id="normal">.</p>
                                </div>
                            </Col>
                            <Col md={4} className="label-float">
                                <p style={{marginBottom: -4, fontSize: 13, color: '#8c8c8c'}}>Your phone</p>
                                <input value={phone} disabled={true} style={{borderBottom: '1px dashed #8c8c8c'}} />
                                <div className="count">
                                    <p>{nameReq ? 'Name is required' : ''}</p>
                                    <p style={{opacity: 0}} id="normal">.</p>
                                </div>
                            </Col>
                    </Row>
                    <Row>
                        <Col className="label-float">
                                <p style={{marginBottom: -4, fontSize: 13, color: '#8c8c8c'}}>Address - Unit</p>
                                <input value={`${street} ${unit}`} disabled={true} style={{borderBottom: '1px dashed #8c8c8c'}} />
                                <div className="count">
                                    <p>{nameReq ? 'Name is required' : ''}</p>
                                    <p style={{opacity: 0}} id="normal">.</p>
                                </div>
                            </Col>
                    </Row>
                    <Row>
                        <Col className="label-float">
                                <p style={{marginBottom: -4, fontSize: 13, color: '#8c8c8c'}}>City - state - Zip Code</p>
                                <input value={`${city}, (${stateCode}), ${postalCode}`} disabled={true} style={{borderBottom: '1px dashed #8c8c8c'}} />
                                <div className="count">
                                    <p>{nameReq ? 'Name is required' : ''}</p>
                                    <p style={{opacity: 0}} id="normal">.</p>
                                </div>
                            </Col>
                    </Row>
                    <Row>
                        <Col md={8} className="label-float">
                                <p style={{marginBottom: -4, fontSize: 13, color: '#8c8c8c'}}>Shipping</p>
                                <input value={"Shipping"} disabled={true} style={{borderBottom: '1px dashed #8c8c8c'}} />
                                <div className="count">
                                    <p>{nameReq ? 'Name is required' : ''}</p>
                                    <p style={{opacity: 0}} id="normal">.</p>
                                </div>
                            </Col>
                            <Col md={4} className="label-float">
                                <p style={{marginBottom: -4, fontSize: 13, color: '#8c8c8c'}}>Shipping price</p>
                                <input value={`US$ ${shipping}`} disabled={true} style={{borderBottom: '1px dashed #8c8c8c'}} />
                                <div className="count">
                                    <p>{nameReq ? 'Name is required' : ''}</p>
                                    <p style={{opacity: 0}} id="normal">.</p>
                                </div>
                            </Col>
                    </Row>
                    <Row>
                        <Col md={8} className="label-float">
                                <p style={{marginBottom: -4, fontSize: 13, color: '#8c8c8c'}}>Product</p>
                                <input value={productName} disabled={true} style={{borderBottom: '1px dashed #8c8c8c'}} />
                                <div className="count">
                                    <p>{nameReq ? 'Name is required' : ''}</p>
                                    <p style={{opacity: 0}} id="normal">.</p>
                                </div>
                            </Col>
                            <Col md={4} className="label-float">
                                <p style={{marginBottom: -4, fontSize: 13, color: '#8c8c8c'}}>Product price</p>
                                <input value={`US$ ${select}`} disabled={true} style={{borderBottom: '1px dashed #8c8c8c'}} />
                                <div className="count">
                                    <p>{nameReq ? 'Name is required' : ''}</p>
                                    <p style={{opacity: 0}} id="normal">.</p>
                                </div>
                            </Col>
                    </Row>
                    <Row>
                        <Col md={8} className="label-float">
                                <p style={{marginBottom: -4, fontSize: 13, color: '#8c8c8c'}}>Tax</p>
                                <input value={"Tax"} disabled={true} style={{borderBottom: '1px dashed #8c8c8c'}} />
                                <div className="count">
                                    <p>{nameReq ? 'Name is required' : ''}</p>
                                    <p style={{opacity: 0}} id="normal">.</p>
                                </div>
                            </Col>
                            <Col md={4} className="label-float">
                                <p style={{marginBottom: -4, fontSize: 13, color: '#8c8c8c'}}>Tax price</p>
                                <input value={`US$ ${((Number(shipping) + Number(select)) * 0.07).toFixed(2)}`} disabled={true} style={{borderBottom: '1px dashed #8c8c8c'}} />
                                <div className="count">
                                    <p>{nameReq ? 'Name is required' : ''}</p>
                                    <p style={{opacity: 0}} id="normal">.</p>
                                </div>
                            </Col>
                    </Row>
                    <Row>
                        <Col md={8} className="label-float">
                                <p style={{marginBottom: -4, fontSize: 13, color: '#8c8c8c'}}>Total</p>
                                <input value={"Total"} disabled={true} style={{borderBottom: '1px dashed #8c8c8c'}} />
                                <div className="count">
                                    <p>{nameReq ? 'Name is required' : ''}</p>
                                    <p style={{opacity: 0}} id="normal">.</p>
                                </div>
                            </Col>
                            <Col md={4} className="label-float">
                                <p style={{marginBottom: -4, fontSize: 13, color: '#8c8c8c'}}>Total price</p>
                                <input value={`US$ ${(((Number(shipping) + Number(select)) * 0.07) + (Number(shipping) + Number(select))).toFixed(2)}`} disabled={true} style={{borderBottom: '1px dashed #8c8c8c'}} />
                                <div className="count">
                                    <p>{nameReq ? 'Name is required' : ''}</p>
                                    <p style={{opacity: 0}} id="normal">.</p>
                                </div>
                            </Col>
                    </Row>
                        <Row>
                            <Col>
                                <button onClick={payment} style={{height: 40, border: 0, width: '100%', backgroundColor: loading ? '#8c8c8c' : '#7bd96c', fontSize: 19, fontWeight: 'bold', color: '#194024', borderRadius: 10, cursor: 'pointer'}} disabled={loading || verificated}>{loading ? 'Loading...' : 'Checkout'}</button>
                            </Col>
                        </Row>
                        <Row className="buttons-modal">
                            <Col md={2}>
                                <button onClick={() => setPage(1)} id="cancel">
                                    <img src={arrow} style={{transform: 'rotate(180deg)'}} width="20px" />
                                    Back
                                </button>
                            </Col>
                            <Col md={7}></Col>
                            <Col md={2}></Col>
                        </Row>
                    </div>
                </div>
            </ModalContainer>
            </>
        );
    }
}