var sp = document.getElementById('sidePanel');
var spb = document.getElementById('sidePanelButton');
var buttonPressed = false;

spb.addEventListener('click', () => {
	sidePanel();
});

var c = document.getElementById('creditsV');
var s = document.getElementById('scrapV');
export var credits = 0;
export var scrap = 0;
export var clickPow = 1;
export var inClickPowPrice = 1000;

export function changeVar(variable, amount) {
	switch (variable) {
		case 'credits':
			credits = amount;
			break;
		case 'scrap':
			scrap = amount;
			break;
		case 'clickPow':
			clickPow = amount;
			break;
		case 'inClickPowPrice':
			inClickPowPrice = amount;
			break;
		default:
			break;
	}
}

export function compactNum(num) {
	let comb = 0;
	let com = 0;
	if (num >= 1000) {
		num /= 1000;
		if (num >= 1000) {
			num /= 1000;
			if (num >= 1000) {
				num /= 1000;
				if (num >= 1000) {
					num /= 1000;
					if (num >= 1000) {
						num /= 1000;
						if (num >= 1000) {
							num /= 1000;
							if (num >= 1000) {
								num /= 1000;
								if (num >= 1000) {
									num /= 1000;
									if (num >= 1000) {
										num /= 1000;
										if (num >= 1000) {
											num /= 1000;
											if (num >= 1000) {
												num /= 1000;
												if (num >= 1000) {
													num /= 1000;
													if (num >= 1000) {
														num /= 1000;
														if (num >= 1000) {
															num /= 1000;
															if (num >= 1000) {
																num /= 1000;
																if (num >= 1000) {
																	num /= 1000;
																	if (num >= 1000) {
																		num /= 1000;
																		if (num >= 1000) {
																			num /= 1000;
																			if (num >= 1000) {
																				num /= 1000;
																				if (num >= 1000) {
																					num /= 1000;
																					if (num >= 1000) {
																						num /= 1000;
																						if (num >= 1000) {
																							com = 'If you see this then you are cheating or need to stop playing...';
																							return com;
																						} else {
																							comb = Math.trunc(num * Math.pow(10, 2)) / Math.pow(10, 2);
																							com = comb + ' Vigintillion'; 
																							return com;
																						}
																					} else {
																						comb = Math.trunc(num * Math.pow(10, 2)) / Math.pow(10, 2);
																						com = comb + ' Novemdecillion'; 
																						return com;
																					}
																				} else {
																					comb = Math.trunc(num * Math.pow(10, 2)) / Math.pow(10, 2);
																					com = comb + ' Octodecillion';
																					return com;
																				}
																			} else {
																				comb = Math.trunc(num * Math.pow(10, 2)) / Math.pow(10, 2);
																				com = comb + ' Septen-decillion'; 
																				return com;
																			}
																		} else {
																			comb = Math.trunc(num * Math.pow(10, 2)) / Math.pow(10, 2);
																			com = comb + ' Sexdecillion'; 
																			return com;
																		}
																	} else {
																		comb = Math.trunc(num * Math.pow(10, 2)) / Math.pow(10, 2);
																		com = comb + ' Quindecillion'; 
																		return com;
																	}
																} else {
																	comb = Math.trunc(num * Math.pow(10, 2)) / Math.pow(10, 2);
																	com = comb + ' Quattuordecillion'; 
																	return com;
																}
															} else {
																comb = Math.trunc(num * Math.pow(10, 2)) / Math.pow(10, 2);
																com = comb + ' Tredecillion'; 
																return com;
															}
														} else {
															comb = Math.trunc(num * Math.pow(10, 2)) / Math.pow(10, 2);
															com = comb + ' Duodecillion'; 
															return com;
														}
													} else {
														comb = Math.trunc(num * Math.pow(10, 2)) / Math.pow(10, 2);
														com = comb + ' Undecillion'; 
														return com;
													}
												} else {
													comb = Math.trunc(num * Math.pow(10, 2)) / Math.pow(10, 2);
													com = comb + ' Decillion'; 
													return com;
												}
											} else {
												comb = Math.trunc(num * Math.pow(10, 2)) / Math.pow(10, 2);
												com = comb + ' Nonillion'; 
												return com;
											}
										} else {
											comb = Math.trunc(num * Math.pow(10, 2)) / Math.pow(10, 2);
											com = comb + ' Octillion'; 
											return com;
										}
									} else {
										comb = Math.trunc(num * Math.pow(10, 2)) / Math.pow(10, 2);
										com = comb + ' Septillion'; 
										return com;
									}
								} else {
									comb = Math.trunc(num * Math.pow(10, 2)) / Math.pow(10, 2);
									com = comb + ' Sextillion'; 
									return com;
								}
							} else {
								comb = Math.trunc(num * Math.pow(10, 2)) / Math.pow(10, 2);
								com = comb + ' Quintillion'; 
								return com;
							}
						} else {
							comb = Math.trunc(num * Math.pow(10, 2)) / Math.pow(10, 2);
							com = comb + ' Quadrillion'; 
							return com;
						}
					} else {
						comb = Math.trunc(num * Math.pow(10, 2)) / Math.pow(10, 2);
						com = comb + 'T'; 
						return com;
					}
				} else {
					comb = Math.trunc(num * Math.pow(10, 2)) / Math.pow(10, 2);
					com = comb + 'B'; 
					return com;
				}
			} else {
				comb = Math.trunc(num * Math.pow(10, 2)) / Math.pow(10, 2);
				com = comb + 'M'; 
				return com;
			}
		} else {
			comb = Math.trunc(num * Math.pow(10, 2)) / Math.pow(10, 2);
			com = comb + 'K'; 
			return com;
		}
	} else {
		return parseInt(num);
	}
}

function sidePanel() {
	if (buttonPressed === false) {
		sp.style.display = 'block';
		spb.style.float = 'none';
		spb.style.left = 15 + '%';
		buttonPressed = true;
	} else if (buttonPressed === true) {
		sp.style.display = 'none';
		spb.style.float = 'left';
		spb.style.left = 0;
		buttonPressed = false;
	}
}

function save() {
	localStorage.setItem('c', credits);
	localStorage.setItem('s', scrap);
	localStorage.setItem('cp', clickPow);
	localStorage.setItem('icpp', inClickPowPrice);
	credits = localStorage.getItem('c');
	scrap = localStorage.getItem('s');
	clickPow = localStorage.getItem('cp');
	inClickPowPrice = localStorage.getItem('icpp');
}

function load() {
	if (localStorage.getItem('c') === null || localStorage.getItem('c') === NaN) {
		localStorage.setItem('c', 0);
	}
	if (localStorage.getItem('s') === null || localStorage.getItem('s') === NaN) {
		localStorage.setItem('s', 0);
	}
	if (localStorage.getItem('cp') === null || localStorage.getItem('cp') === NaN) {
		localStorage.setItem('cp', 1);
	}
	if (localStorage.getItem('icpp') === null || localStorage.getItem('icpp') === NaN) {
		localStorage.setItem('icpp', 1000);
	}
	c.textContent = compactNum(localStorage.getItem('c'));
	s.textContent = compactNum(localStorage.getItem('s'));
	credits = localStorage.getItem('c');
	scrap = localStorage.getItem('s');
	clickPow = localStorage.getItem('cp');
	inClickPowPrice = localStorage.getItem('icpp');
}

setInterval(() => {
	save();
}, 500);

load();