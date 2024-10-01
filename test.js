$(document).ready(function(){$.setTours(),$.setHeight(),$(".btn-enquiry").click(function(){$("#tab-enquire").tab("show"),$("html, body").animate({scrollTop:$(".details-tab").offset().top},500)})}),$.getShipImages=function(){var a=epiTourData.mapUrl,t=epiTourData.imageUrl,e=epiTourData.images;t&&$(".fotorama").append("<img src="+a+">"),t&&$(".fotorama").append("<img src="+t+">"),e&&e.length&&$.each(e,function(a,t){$(".fotorama").append('<img src="'+t.url+'">')}),$(".fotorama").fotorama()},$.setTours=function(){var a=epiTourData;let t,e;e=1<a.bestMarket.twin.sell?(t=a.bestMarket.twin,2):(t=a.bestMarket.single,1),$(".container-breadcrumb span").text(a.name);a=`<div class="tour-details mb-5">
                        <div class="row">
                            <div class="col-md-6 col-ovs">
                                <div class="fotorama pb-4" data-auto="false" data-nav="thumbs" data-width="100%" data-fit="cover" data-ratio="800/450" data-thumbwidth="110" data-thumbheight="77" data-arrows="true" data-click="true" data-swipe="true"></div>
                            </div>
                            <div class="col-md-6 col-ovs">
                                <div class="box-shadow px-5 py-5">
                                    <div class="row">
                                        <div class="col-xs-12">
                                            <h3 class="brand-text-primary mt-0"><b>${a.name}</b></h3>
                                            <h6 class="small"><img src="https://assets.cruisemail.com.au/memberprivilegestravel/icon/icons-destination-gray.png"><b>${a.countries.join(", ")}</b></h6>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="text-center">
                                                <div class="py-4">
                                                    <h6 class="mt-0 mb-2 font-size-revert item-price-label"><b>RETAIL PRICE</b></h6>
                                                    <h5 class="brand-color mt-0 mb-2"><b>${$.formatPrice(t.sell+t.yieldDiscounted)}</b></h5>
                                                    <h6 class="brand-color mt-0 mb-2 font-size-revert"><b>PER PERSON</b></h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="text-center brand-text-primary">
                                                <div class="py-4">
                                                    <h6 class="mt-0 mb-2 font-size-revert item-price-label"><b>MEMBER EXCHANGE PRICE</b></h6>
                                                    <h5 class="brand-color mt-0 mb-2"><b>${$.formatPrice(t.sell)}</b></h5>
                                                    <h6 class="brand-color mt-0 mb-2 font-size-revert"><b>PER PERSON</b></h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="text-center">
                                                 <div class="py-4">
                                                    <h6 class="mt-0 mb-2 font-size-revert item-price-label"><b>SAVINGS</b></h6>
                                                    <h5 class="brand-color mt-0 mb-2"><b>${$.formatPrice(2*t.yieldDiscounted)}</b></h5>
                                                    <h6 class="brand-color mt-0 mb-2 font-size-revert"><b>PER COUPLE</b></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12">
                                            <h6 class="mb-2"><span class="brand-text-primary"><b>DURATION:</b></span>&nbsp;<span>${a.duration}&nbsp;Days</span></h6>
                                            <h6 class="mb-2"><span class="brand-text-primary"><b>PROVIDER:</b></span>&nbsp;<span>${a.provider.name}</span></h6>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12">
                                            <img class="details-logo pt-3" src="${a.provider.imageUrl}" alt="Logo">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="details-tab box-shadow px-5 py-5">
                        <ul class="nav nav-tabs text-center border-0 mb-5">
                            <li id="tab-overview" class="active px-4"><a class="border-0" data-toggle="tab" href="#menu1">Overview</a></li>
                            <li id="tab-itinerary" class="px-4"><a class="border-0" data-toggle="tab" href="#menu4">Itinerary</a></li>
                            <li id="tab-pricing" class="px-4"><a class="border-0" data-toggle="tab" href="#menu2">Availability & Pricing</a></li>
                            <li id="tab-enquire" class="px-4"><a class="border-0" data-toggle="tab" href="#menu3">Enquire</a></li>
                        </ul>
                        <div class="tab-content">
                            <div id="menu1" class="tab-pane fade active in">
                                <div class="container-fluid">
                                    ${epiTourData.summary}
                                </div>
                            </div>
                            <div id="menu4" class="tab-pane fade">
                                <div class="container-fluid">
                                    ${$.getItinerary()}
                                </div>
                            </div>
                            <div id="menu2" class="tab-pane fade">
                                <div class="container-fluid">
                                     ${$.getPricing(e)}
                                </div>
                            </div>
                            <div id="menu3" class="tab-pane fade">
                                <div class="enquire-container">
                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-xs-12 pb-5">
                                                <p>Your Member Details</p>
                                                <p><b>Name: <span class="member-name"></span></b></p>
                                                <p><b>Mobile Number: <span class="member-mobile"></span></b></p>
                                                <p><b>Email Address: <span class="member-email"></span></b></p>
                                                <div>If these details are not correct please update your contact details here: <a class="brand-text-primary" href="/myaccount">Update Account Details â¯â¯</a></div>
                                            </div>
                                            <div class="col-xs-12">
                                                <iframe style="width: 100%; height: 650px; border: 0;" id="enqFrame" src="https://callback.ourvacationcentre.com.au/?company=memberprivilegestravel"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;$(".content-details").append(a),$.getShipImages()},$.setHeight=function(){setTimeout(function(){$(".col-ovs").matchHeight()},2e3),$(".item-price-label").matchHeight()},$.getItinerary=function(){tour_itinerary_html="",tour_itinerary_html+=`<img style="max-height:480px; max-width:100%; margin-bottom: 10px;" src="${epiTourData.mapUrl}" onerror="$(this).hide();" alt="Tour Map"></img>`;for(const a of epiTourData.itinerary)tour_itinerary_html+=`
      <p>
          <strong>Day ${a.dayNumber} / ${a.summary}</strong>
      </p>
      <p>
          ${a.details}
      </p>`;return tour_itinerary_html},$.getPricing=function(p){let html="",count=1===p?epiSingleDepartureCount:epiTwinDepartureCount;if(count){html+=`<div class="text-center">
                        <table class="w-100">
                            <thead>
                                <tr class="small">
                                    <td>
                                        DATE
                                    </td>
                                    <td>
                                        STATUS
                                    </td>
                                    <td>
                                        TOUR PRICE PER PERSON
                                    </td>
                                    <td>
                                        MEMBER EXCHANGE PRICE
                                    </td>
                                    <td>
                                        SAVINGS PER COUPLE
                                    </td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>`;for(const item of epiTourData.departures){let priceTour=1===p?item.prices.single:item.prices.twin;priceTour.sell&&(local_date_string=eval("new "+item.startDate.slice(1,-1)),html+=`<tr>
                                <td>
                                    ${local_date_string.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"})}
                                </td>
                                <td>
                                    ${item.available?"Available":"Not Available"}
                                </td>
                                <td>
                                    <b>${$.formatPrice(priceTour.sell+priceTour.yieldDiscounted)} pp*</b>
                                </td>
                                <td>
                                    <b>${$.formatPrice(priceTour.sell)} pp*</b>
                                </td>
                                <td>
                                    <b>${$.formatPrice(2*priceTour.yieldDiscounted)} per couple</b>
                                </td>
                                <td>
                                    <a href="#menu3" data-toggle="tab" class="btn brand-bg-primary text-white btn-enquiry py-2 rounded-5">ENQUIRE NOW</a>
                                </td>
                            </tr>`)}html+="</tbody></table></div>"}return html},$.formatPrice=function(a,t){return a?"$"+Math.round(a).toLocaleString():t??"$0"};
