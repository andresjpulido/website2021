function serialize (object) {
    var type = typeof object;
    if (object === null) {
        return '"nullValue"';
    }
    if (type == 'string' || type === 'number' || type === 'boolean') {
        return '"' + object + '"';
    }
    else if (type === 'function') {
        return '"functionValue"';
    }
    else if (type === 'object') {
        var output = '{';
        for (var item in object) {
            try {
                if (item !== 'enabledPlugin') {
                    output += '"' + item + '":' + serialize(object[item]) + ', ';
                }
            }
            catch (e) {
            }
        }
        return output.replace(/\,$/, '') + '}';
    }
    else if (type === 'undefined') {
        return '"undefinedError"';
    }
    else {
        return '"unknownTypeError"';
    }
};

document.getElementById("useragent").innerHTML = serialize(navigator)  ;
console.log( serialize(navigator) )

navigator.permissions.query({ name: 'accelerometer' })
    .then(result => {
        if (result.state === 'denied') {
            document.getElementById("permissions").innerHTML = 'Permission to use accelerometer sensor is denied.';
            return;
        } else {
            document.getElementById("permissions").innerHTML = "ok"
        }
        // Use the sensor.

    });


let accelerometer = null;
try {
    accelerometer = new Accelerometer({ referenceFrame: 'device' });

    accelerometer.addEventListener('error', event => {
        document.getElementById("accelerometer").className = "error";
        document.getElementById("accelerometer").innerHTML = event.error.name + ' (' + event.error.message + " )";

    });
    //accelerometer.addEventListener('reading', () => reloadOnShake(accelerometer));
    accelerometer.addEventListener('reading', () => {
        console.log("Acceleration along the X-axis " + acl.x);
        console.log("Acceleration along the Y-axis " + acl.y);
        console.log("Acceleration along the Z-axis " + acl.z);
        document.getElementById("console").innerHTML = acl.x + "" + acl.y + "" + acl.z
    });
    accelerometer.start();
} catch (error) {
    document.getElementById("error").className = "error";
    document.getElementById("error").innerHTML = error.name + ' (' + error.message + " )";

}

try {
    const sensor = new AbsoluteOrientationSensor();
    sensor.start();
    sensor.onerror = event => {
        document.getElementById("AbsoluteOrientationSensor").className = "error";
        document.getElementById("AbsoluteOrientationSensor").innerHTML = error.name + ' (' + error.message + " )";
    };
} catch (Error) {
    document.getElementById("AbsoluteOrientationSensor").className = "error";
    document.getElementById("AbsoluteOrientationSensor").innerHTML = error.name + ' (' + error.message + " )";
}

try {
    const magSensor = new Magnetometer({ frequency: 60 });
    magSensor.start();
    magSensor.onerror = event => {
        document.getElementById("magSensor").className = "error";
        document.getElementById("magSensor").innerHTML = error.name + ' (' + error.message + " )";
    };
} catch (Error) {
    document.getElementById("magSensor").className = "error";
    document.getElementById("magSensor").innerHTML = error.name + ' (' + error.message + " )";
}

try {
    const ambLightSensor = new AmbientLightSensor({ frequency: 60 });
    ambLightSensor.start();
    ambLightSensor.onerror = event => {
        document.getElementById("ambLightSensor").className = "error";
        document.getElementById("ambLightSensor").innerHTML = error.name + ' (' + error.message + " )";
    };
} catch (Error) {
    document.getElementById("ambLightSensor").className = "error";
    document.getElementById("ambLightSensor").innerHTML = error.name + ' (' + error.message + " )";
}


accelerometer.addEventListener('reading', () => {
    console.log("Acceleration along the X-axis " + acl.x);
    console.log("Acceleration along the Y-axis " + acl.y);
    console.log("Acceleration along the Z-axis " + acl.z);
    document.getElementById("console").innerHTML = acl.x + "" + acl.y + "" + acl.z
});

try {
    const gyrSensor = new Gyroscope({ frequency: 60 });
    gyroscope.addEventListener('reading', e => {
        document.getElementById("gyrSensor").innerHTML = ' Angular velocity ( x: ' + gyroscope.x + " y: " + gyroscope.y + " z: " + gyroscope.z + " )";
    });
    gyrSensor.start();
    gyrSensor.onerror = event => {
        document.getElementById("gyrSensor").className = "error";
        document.getElementById("gyrSensor").innerHTML = error.name + ' (' + error.message + " )";
    };
} catch (Error) {
    document.getElementById("gyrSensor").className = "error";
    document.getElementById("gyrSensor").innerHTML = error.name + ' (' + error.message + " )";
}

try {
    const linAccSensor = new LinearAccelerationSensor({ frequency: 60 });
    linAccSensor.start();
    linAccSensor.onerror = event => {
        document.getElementById("linAccSensor").className = "error";
        document.getElementById("linAccSensor").innerHTML = error.name + ' (' + error.message + " )";
    };
} catch (Error) {
    document.getElementById("linAccSensor").className = "error";
    document.getElementById("linAccSensor").innerHTML = error.name + ' (' + error.message + " )";
}

try {
    const relOrientationSensor = new RelativeOrientationSensor({ frequency: 60 });
    relOrientationSensor.start();
    relOrientationSensor.onerror = event => {
        document.getElementById("relOrientationSensor").className = "error";
        document.getElementById("relOrientationSensor").innerHTML = error.name + ' (' + error.message + " )";
    };
} catch (Error) {
    document.getElementById("relOrientationSensor").className = "error";
    document.getElementById("relOrientationSensor").innerHTML = error.name + ' (' + error.message + " )";
}

try {
    const relOrientationSensor = new RelativeOrientationSensor({ frequency: 60 });
    relOrientationSensor.start();
    relOrientationSensor.onerror = event => {
        document.getElementById("relOrientationSensor").className = "error";
        document.getElementById("relOrientationSensor").innerHTML = error.name + ' (' + error.message + " )";
    };
} catch (Error) {
    document.getElementById("relOrientationSensor").className = "error";
    document.getElementById("relOrientationSensor").innerHTML = error.name + ' (' + error.message + " )";
}



 

