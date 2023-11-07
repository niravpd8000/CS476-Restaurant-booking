//import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Button, Typography} from '@mui/material';
import './Reciept.css';
import {useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Reciept() {
    const navigate = useNavigate();
    return (
        <div>
            <div class="container bootdey">
                <div class="row invoice row-printable">
                    <div class="col-md-10">

                        <div class="panel panel-default plain" id="dash_0">

                            <div class="panel-body p30">
                                <div class="row">

                                    <div class="col-lg-6">

                                        <div class="invoice-logo"><img width="100"
                                                                       src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                                                       alt="Invoice logo"/></div>
                                    </div>

                                    <div class="col-lg-6">

                                        <div class="invoice-from">
                                            <ul class="list-unstyled text-right">
                                                <li>Dash LLC</li>
                                                <li>2500 Ridgepoint Dr, Suite 105-C</li>
                                                <li>Austin TX 78754</li>
                                                <li>VAT Number EU826113958</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="col-lg-12">

                                        <div class="invoice-details mt25">
                                            <div class="well">
                                                <ul class="list-unstyled mb0">
                                                    <li><strong>Invoice</strong> #936988</li>
                                                    <li><strong>Invoice Date:</strong> Monday, October 10th, 2015</li>
                                                    <li><strong>Due Date:</strong> Thursday, December 1th, 2015</li>
                                                    <li><strong>Status:</strong> <span
                                                        class="label label-danger">UNPAID</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="invoice-to mt25">
                                            <ul class="list-unstyled">
                                                <li><strong>Invoiced To</strong></li>
                                                <li>Jakob Smith</li>
                                                <li>Roupark 37</li>
                                                <li>New York, NY, 2014</li>
                                                <li>USA</li>
                                            </ul>
                                        </div>
                                        <div class="invoice-items">
                                            <div class="table-responsive" style={{/*overflow: hidden; outline: none;*/}}
                                                 tabindex="0">
                                                <table class="table table-bordered">
                                                    <thead>
                                                    <tr>
                                                        <th class="per70 text-center">Description</th>
                                                        <th class="per5 text-center">Qty</th>
                                                        <th class="per25 text-center">Total</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>1024MB Cloud 2.0 Server - elisium.dynamic.com (12/04/2014 -
                                                            01/03/2015)
                                                        </td>
                                                        <td class="text-center">1</td>
                                                        <td class="text-center">$25.00 USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Logo design</td>
                                                        <td class="text-center">1</td>
                                                        <td class="text-center">$200.00 USD</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Backup - 1024MB Cloud 2.0 Server - elisium.dynamic.com</td>
                                                        <td class="text-center">12</td>
                                                        <td class="text-center">$12.00 USD</td>
                                                    </tr>
                                                    </tbody>
                                                    <tfoot>
                                                    <tr>
                                                        <th colspan="2" class="text-right">Sub Total:</th>
                                                        <th class="text-center">$237.00 USD</th>
                                                    </tr>
                                                    <tr>
                                                        <th colspan="2" class="text-right">20% VAT:</th>
                                                        <th class="text-center">$47.40 USD</th>
                                                    </tr>
                                                    <tr>
                                                        <th colspan="2" class="text-right">Credit:</th>
                                                        <th class="text-center">$00.00 USD</th>
                                                    </tr>
                                                    <tr>
                                                        <th colspan="2" class="text-right">Total:</th>
                                                        <th class="text-center">$284.4.40 USD</th>
                                                    </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="invoice-footer mt25">
                                            <p class="text-center">Generated on Monday, October 08th, 2015 <a href="#/"
                                                                                                              class="btn btn-default ml15"><i
                                                class="fa fa-print mr5"></i> Print</a></p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Reciept;
