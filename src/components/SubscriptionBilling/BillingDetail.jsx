import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackIcon from '/BackIcon.svg';
import SubscriptionLogo from '/SubscriptionLogo.svg';

const BillingDetail = () => {
    const navigate = useNavigate();

    return (
        <div className=" min-h-screen font-sans text-start">
            {/* Header */}
            <div className="w-full mx-auto">
                <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-[24px] font-jakarta font-semibold text-[#000000] mb-4">
                    <img src={BackIcon} alt="Back" className="w-[32px] h-[32px]" />
                    Subscription & Billing
                </button>

                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h2 className="text-[24px] font-semibold text-[#333843]">Invoice #2020-05-0001</h2>
                        <p className="text-[16px] text-[#667085]">Paid on June 27, 2023</p>
                    </div>

                    <div className="flex gap-2">
                        <select className="border border-gray-300 bg-white font-sans px-4 py-1.5 rounded-md text-sm text-[#1B1E25] font-medium">
                            <option value="More">More Options</option>
                        </select>
                        <button className="bg-white border border-[#1EB386] text-[#1EB386] px-4 py-1.5 text-[14px] font-semibold rounded-md">
                            Record a Payment
                        </button>
                    </div>
                </div>

                {/* Grid Layout: Left and Right Boxes */}
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
                    {/* Left: Invoice Details */}
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        {/* Company Info */}
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-start gap-3">
                                <div className="w-[130px] h-[130px] bg-gray-200 rounded">
                                    <img
                                        src={SubscriptionLogo}
                                        alt="Logo"
                                        className="w-full h-full object-cover rounded"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <p className="font-medium text-[#333843] text-[14px]">Sisyphus</p>
                                    <p className='text-[#667085] text-[12px]'>John Brandon</p>
                                    <p className='text-[#667085] text-[12px]'>789/1 Sector-2c, 38200 Gandhinagar, France</p>
                                    <p className='text-[#667085] text-[12px]'>848172194 | contact@beta.se</p>
                                    <p className='text-[#667085] text-[12px]'>SIRET: 362 521 879 00034</p>
                                    <p className='text-[#667085] text-[12px]'>VAT: 842-484021</p>
                                </div>
                            </div>
                            <div className="text-right text-[#1B1E25]">
                                <p className="text-xs  bg-[#F4F5F6] rounded-md p-2 mb-8" >#2020-05-0001</p>
                                <p className='text-[#667085] text-[12px]'>Total Amount</p>
                                <p className="text-[#333843] text-[20px]  font-bold">₹3,030.00</p>
                            </div>
                        </div>

                        {/* Billing Info Box */}
                        <div className="border border-gray-200 rounded-md text-sm text-[#1B1E25]">
                            <div className="grid grid-cols-2 gap-6 p-4">
                                <div className="space-y-2 bg-[#FAFAFA] px-10 py-3">
                                    <div>
                                        <p className="text-[#667085] text-[12px]">Bill Date</p>
                                        <p className="font-medium text-[#333843] text-[14px]">03/05/2020</p>
                                    </div>
                                    <div>
                                        <p className="text-[#667085] text-[12px]">Delivery Date</p>
                                        <p className="font-medium text-[#333843] text-[14px]">03/05/2020</p>
                                    </div>
                                    <div>
                                        <p className="text-[#667085] text-[12px]">Terms of Payment</p>
                                        <p className="font-medium text-[#333843] text-[14px]">Within 15 days</p>
                                    </div>
                                    <div>
                                        <p className="text-[#667085] text-[12px]">Payment Deadline</p>
                                        <p className="font-medium text-[#333843] text-[14px]">05/18/2020</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div>
                                        <p className="text-[#667085] text-[12px]">Billing Address</p>
                                        <p className="font-medium text-[#333843] text-[14px]">Willy Wonka</p>
                                        <p>1445 West Norwood Avenue, Itasca, Illinois, USA</p>
                                        <p>97223041054 | om@om.com</p>
                                        <p>SIRET: 362 521 879 00034</p>
                                        <p>VAT: 842-484021</p>
                                    </div>
                                    <div className="pt-2">
                                        <p className="text-[#667085] text-[12px]">Note</p>
                                        <p>
                                            This is a custom message that might be relevant to the customer. It can span up to three or four rows.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="overflow-x-auto px-5">
                                <table className="min-w-full text-sm mt-4 border-t border-gray-200 ">
                                    <thead className="bg-gray-50 text-[#667085] font-medium text-start">
                                        <tr>
                                            <th className="px-4 py-2 text-start">No.</th>
                                            <th className="px-4 py-2 text-start">Article</th>
                                            <th className="px-4 py-2 text-start">Quantity</th>
                                            <th className="px-4 py-2 text-start">Unit Price</th>
                                            <th className="px-4 py-2 text-start">VAT</th>
                                            <th className="px-4 py-2 text-start">Amount</th>
                                            <th className="px-4 py-2 text-start">Final Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-t border-gray-200 text-[#1B1E25]">
                                            <td className="px-4 py-2">1</td>
                                            <td className="px-4 py-2">
                                                App
                                                <div className="text-gray-400 text-xs">Product Description</div>
                                            </td>
                                            <td className="px-4 py-2">150 Unit(s)</td>
                                            <td className="px-4 py-2">₹20</td>
                                            <td className="px-4 py-2">0%</td>
                                            <td className="px-4 py-2">₹3,000</td>
                                            <td className="px-4 py-2">₹3,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Totals */}
                            <div className="grid grid-cols-2 gap-4 px-8 py-4 text-sm">
                                <div></div>
                                <div className="space-y-1 text-[#667085]">
                                    <div className="flex justify-between">
                                        <p>Total HT</p>
                                        <p>₹3,000</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p>Total Disbursements</p>
                                        <p>₹30</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p>Total VAT</p>
                                        <p>₹0</p>
                                    </div>
                                    <div className="flex justify-between font-semibold pt-2 border-t border-gray-200 mt-2">
                                        <p>Total Price</p>
                                        <p>₹3,030.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Terms */}
                        <p className="text-sm text-gray-400 mt-4">Please pay within 15 days of receiving this invoice.</p>
                    </div>

                    {/* Right: Two Separate Boxes */}
                    <div className="space-y-6">
                        {/* Invoice Action Box */}
                        <div className="bg-white rounded-md shadow-sm p-4">
                            <p className="text-[#1B1E25] font-medium mb-4 text-center">Invoice not yet sent!</p>
                            <button className="mx-auto text-center flex justify-center text-[16px] font-sans bg-[#1EB386] px-20 text-white py-2 rounded-md text-sm font-medium">
                                ➤ Send Invoice
                            </button>
                        </div>

                        {/* Summary Box */}
                        <div className="bg-white rounded-md shadow-sm p-4">
                            <p className="text-[#1B1E25] font-medium mb-4">Summary</p>
                            <div className="text-sm text-[#1B1E25] space-y-4">
                                <div className="flex justify-between">
                                    <p>Total</p>
                                    <p>₹3,030 Incl. VAT</p>
                                </div>
                                <div>
                                    <p className="text-[#333843] font-medium">● Deposit No. 2020-04-0006</p>
                                    <p className="text-gray-500">Date: Oct 24, 2019</p>
                                    <p>Amount: ₹300</p>
                                </div>
                                <div>
                                    <p className="text-[#333843] font-medium">● Partial Payment</p>
                                    <p className="text-gray-500">Date: Oct 26, 2019</p>
                                    <p>Amount: ₹400</p>
                                </div>
                                <div>
                                    <p className="text-[#333843] font-medium">● Partial Payment</p>
                                    <p className="text-gray-500">Date: Oct 27, 2019</p>
                                    <p>Amount: ₹2,230</p>
                                </div>
                                <div className="flex justify-between items-center border-t pt-4 mt-4">
                                    <p>Remaining Amount</p>
                                    <p className="bg-[#FEF0F0] text-[#333843] px-3 py-1 rounded-md text-sm font-semibold">
                                        ₹100 Incl. VAT
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* end header wrap */}
        </div>
    );
};

export default BillingDetail;
