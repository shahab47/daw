"use strict";

( function() {

waFwk.on.addSample = function( smpObj ) {
	var usrDat = new SampleHTML();

	lg( "addSample", smpObj );
	return usrDat;
};

function SampleHTML() {
}

SampleHTML.prototype = {
};

} )();

/*
gs.sample.create = function( gsfile ) {
	var smp = gs.wctx.createSample( gsfile.wbuff );

	if ( !gsfile.wbuff.buffer ) {
		gsfile.wbuff._setDuration( gsfile.bufferDuration );
	}
	smp.data = {
		selected: false,
		gsfile: gsfile,
	};
	++gsfile.nbSamples;
	gsfile.source.used();
	ui.sample.create( smp );
	ui.sample.duration( smp );
	return smp;
};
*/