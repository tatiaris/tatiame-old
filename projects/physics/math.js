pi = Math.PI
e = Math.E
g = 9.8
e0 = 8.854*(10**-12)
k = 1/(4*pi*e0)

function coulomb_force (q1, q2, r) {
    return k*q1*q2/(r**2);
}

function electric_field_point_charge (q, r) {
    return k*q/(r**2);
}

function capacitance_plates (a, d, kc = 1) {
    return kc*e0*a/d;
}

function capacitance_qv (q, v) {
    return q/v;
}

function voltage_qc (q, c, kc = 1) {
    return kc*q/c;
}

function charge_cv (c, v, kc = 1) {
    return kc*c*v;
}

function eq_cap_series (caps) {
    return 1/inverse_sum(caps);
}

function eq_cap_parallel (caps) {
    return sum(caps);
}

function eq_res_parallel (caps) {
    return 1/inverse_sum(caps);
}

function eq_res_series (caps) {
    return sum(caps);
}

function voltage_ir (i, r) {
    return i*r;
}

function current_vr (v, r) {
    return v/r;
}

function resistance_vi (v, i) {
    return v/i;
}

function resistance_pla (p, l, a) {
    return p*l/a;
}

function resistivity_rla (r, l, a) {
    return r*a/l
}

function T (r, c) {
    return r*c;
}

function charge_on_cap (q, t, T) {
    return q*(1 - (Math.e**(t/T)));
}

function time_to_charge_cap (q, q_max, T) {
    return T*Math.log(1 - (q/q_max));
}

function power_iv (i, v) {
    return i*v;
}

function power_ir (i, r) {
    return (i**2)*r;
}

function power_vr (i, v) {
    return (v**2)/r;
}

function energy_qv (q, v) {
    return q*v/2;
}

function energy_cv (c, v) {
    return c*(v**2)/2;
}

function energy_qc (q, c) {
    return (q**2)/(2*c);
}

function inverse_sum (nums) {
    s = 0;
    for (var i = 0; i < nums.length; i++) {
        s += 1/nums[i];
    }
    return s;
}

function sum (nums) {
    s = 0;
    for (var i = 0; i < nums.length; i++) {
        s += nums[i];
    }
    return s;
}
