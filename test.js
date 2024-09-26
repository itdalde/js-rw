$(document).ready(function () {
    $.setDms();
    $.setHeight();
});

$.getShipImages = function (data) {
    if (data.Image != null) {
        $('.fotorama').append('<img src=' + data.Image + '>');
    }

    if (data.ImageGallery && data.ImageGallery.length) {
        $.each(data.ImageGallery, function (key, value) {
            $('.fotorama').append('<img src="' + value.GalleryImageUrl + '">');
        });
    }

    $('.fotorama').fotorama();
};

$.setDms = function () {
    let data = JSON.parse(document.getElementById('appdata').dataset.obj);

    $('.container-breadcrumb span').text(data.Name);

    let html = `<div class="dms-details mb-5">
                        <div class="row">
                            <div class="col-md-6 col-ovs">
                                <div class="fotorama pb-4" data-auto="false" data-nav="thumbs" data-width="100%" data-fit="cover" data-ratio="800/450" data-thumbwidth="110" data-thumbheight="77" data-arrows="true" data-click="true" data-swipe="true"></div>
                            </div>
                            <div class="col-md-6 col-ovs">
                                <div class="box-shadow px-5 py-5">
                                    <div class="row">
                                        <div class="col-xs-12">
                                            <h3 class="brand-text-primary mt-0"><b>${data.Name}</b></h3>
                                            <h6 class="small"><img src="https://assets.cruisemail.com.au/memberprivilegestravel/icon/icons-destination-gray.png"><b>${data.PackageType == "Fly Cruise" ? data.Destination : data.Region}</b></h6>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="text-center">
                                                <div class="py-4">
                                                    <h6 class="mt-0 mb-2 font-size-revert item-price-label"><b>RETAIL PRICE</b></h6>
                                                    <h5 class="brand-color mt-0 mb-2"><b>${$.formatPrice(data.WasPrice)}</b></h5>
                                                    <h6 class="brand-color mt-0 mb-2 font-size-revert"><b>PER PERSON</b></h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="text-center brand-text-primary">
                                                <div class="py-4">
                                                    <h6 class="mt-0 mb-2 font-size-revert item-price-label"><b>MEMBER EXCHANGE PRICE</b></h6>
                                                    <h5 class="brand-color mt-0 mb-2"><b>${$.formatPrice(data.Price)}</b></h5>
                                                    <h6 class="brand-color mt-0 mb-2 font-size-revert"><b>PER PERSON</b></h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="text-center">
                                                 <div class="py-4">
                                                    <h6 class="mt-0 mb-2 font-size-revert item-price-label"><b>SAVINGS</b></h6>
                                                    <h5 class="brand-color mt-0 mb-2"><b>${$.formatPrice(data.Save)}</b></h5>
                                                    <h6 class="brand-color mt-0 mb-2 font-size-revert"><b>PER COUPLE</b></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12">
                                            <h6 class="mb-2"><span class="brand-text-primary"><b>DURATION:</b></span>&nbsp;<span>${data.Duration}&nbsp;Nights</span></h6>
                                            <h6 class="mb-2"><span class="brand-text-primary"><b>PROVIDER:</b></span>&nbsp;<span>${data.Provider}</span></h6>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xs-12">
                                            <img class="details-logo pt-3" src="${data.Logo}" alt="Ship Logo">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="dms-tab box-shadow px-5 py-5">
                        <ul class="nav nav-tabs text-center border-0 mb-5">
                            <li class="active px-4"><a class="border-0" data-toggle="tab" href="#menu1">Overview</a></li>
                            <li class="px-4"><a class="border-0" data-toggle="tab" href="#menu2">Enquire</a></li>
                        </ul>
                        <div class="tab-content">
                            <div id="menu1" class="tab-pane fade active in">
                                <div class="container-fluid">
                                    <div id="fulldescription">${data.Description}</div>
                                    <div class="row mt-1 pt-1 borderTop">
                                        <div class="col-sm-12">
                                            <p><strong>Itinerary</strong></p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div id="fullitinerary" class="col-md-12 small">${data.Itinerary}</div>
                                    </div>
                                    <hr>
                                    <div class="row mt-1 pt-1 borderTop">
                                        <div class="col-sm-12">
                                            <p><strong>Terms and Conditions</strong></p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div id="fullterms" class="col-md-12 small">${data.Terms}</div>
                                    </div>
                                </div>
                            </div>
                            <div id="menu2" class="tab-pane fade">
                                <div class="enquire-container">
                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-xs-12 pb-5">
                                                <p>Your Member Details</p>
                                                <p><b>Name: <span class="member-name"></span></b></p>
                                                <p><b>Mobile Number: <span class="member-mobile"></span></b></p>
                                                <p><b>Email Address: <span class="member-email"></span></b></p>
                                                <div>If these details are not correct please update your contact details here: <a class="brand-text-primary" href="/myaccount">Update Account Details ❯❯</a></div>
                                            </div>
                                            <div class="col-xs-12">
                                                <iframe style="width: 100%; height: 650px; border: 0;" id="enqFrame" src="https://callback.ourvacationcentre.com.au/?company=memberprivilegestravel"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;

    $(".dms-container").append(html);
    $.getShipImages(data);
};

$.setHeight = function () {
    setTimeout(function () {
        $('.col-ovs').matchHeight();
    }, 2000);

    $('.item-price-label').matchHeight();
};

$.formatPrice = function (p, q) {
    if (p) {
        let price = Math.round(p);
        return "$" + price.toLocaleString();
    }
    else {
        return q ?? "$0";
    }
};