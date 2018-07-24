import React, { Component } from 'react';
import './Checkout.css';
import logo from './img/cart.png';

class Checkout extends Component {

	render() {
		return (
				<div id="DIV_1" className="col-md-2 col-md-offset-4">
					<div id="DIV_2">
						<p id="P_3">
						</p>
						<div id="DIV_4">
							<div id="DIV_5">
								<a id="A_6" href="javascript:;"></a>
								<table id="TABLE_7">
									<tbody id="TBODY_8">
										<tr id="TR_9">
											<td id="TD_10">
												<div id="DIV_11">
													Subtotal ({this.props.count} items):
												</div>
											</td>
											<td id="TD_12">
												<div id="DIV_13">
													{this.props.total}
												</div>
											</td>
										</tr>
										<tr id="TR_14">
											<td id="TD_15">
												<div id="DIV_16">
													<span id="SPAN_17">Shipping:</span>
												</div>
											</td>
											<td id="TD_18">
												<div id="DIV_19">
													FREE
												</div>
											</td>
										</tr>
										<tr id="TR_20">
											<td colSpan="2" id="TD_21">
												<div id="DIV_22">
												</div>
											</td>
										</tr>
										<tr id="TR_23">
											<td id="TD_24">
												<div id="DIV_25">
													Total:
												</div>
											</td>
											<td id="TD_26">
												<div id="DIV_27">
													US ${this.props.total}
												</div>
											</td>
										</tr>
										<tr id="TR_28">
											<td colSpan="2" id="TD_29">
												<div id="DIV_30">
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div id="DIV_31">
								<div id="DIV_32">
									 <a id="A_33" href="ptc?_trksid=p2046448.m2466">Proceed to checkout</a>
								</div>
								<div id="DIV_34">
									<a id="A_35" href="https://www.ebay.com/myb/Summary">Continue shopping</a>
								</div>
							</div>
						</div>
						<p id="P_36">
						</p>
					</div>
				</div>
					
			);
		
	}
}

export default Checkout;

