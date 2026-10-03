import { ref } from "vue";
import { getImages } from "@/utils/index";
export function imageCropper() {
    const imageSrc = ref(getImages("other-images/bg-profile.png"));
    const cropper = ref();
    const result = ref({
        coordinates: {
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            angle: 0,
        },
        image: null,
        size: {
            width: 0,
            height: 0,
        },
    });
    function onFileChange(event) {
        const file = event.target?.files?.[0];
        if (!file)
            return;
        const reader = new FileReader();
        reader.onload = (e) => {
            imageSrc.value = e.target?.result;
        };
        reader.readAsDataURL(file);
    }
    function onChange() {
        const cropResult = cropper.value?.getResult();
        if (cropResult) {
            const canvas = cropper.value.getCanvas();
            const croppedImage = canvas?.toDataURL("image/png");
            result.value = {
                coordinates: cropResult.coordinates,
                image: croppedImage,
                size: {
                    width: Math.round(cropResult.coordinates.width),
                    height: Math.round(cropResult.coordinates.height),
                },
            };
        }
    }
    function zoom(factor) {
        cropper.value.zoom(factor);
    }
    function move(direction) {
        if (direction === "left") {
            cropper.value.move(-result.value.size.width / 4);
        }
        else if (direction === "right") {
            cropper.value.move(result.value.size.width / 4);
        }
        else if (direction === "top") {
            cropper.value.move(0, -result.value.size.height / 4);
        }
        else if (direction === "bottom") {
            cropper.value.move(0, result.value.size.height / 4);
        }
    }
    function rotate(angle) {
        cropper.value.rotate(angle);
    }
    function flip(x, y) {
        const { image } = cropper.value.getResult();
        if (image.transforms.rotate % 180 !== 0) {
            cropper.value.flip(!x, !y);
        }
        else {
            cropper.value.flip(x, y);
        }
    }
    function resize(width = 1, height = 1) {
        let startCoordinates;
        cropper.value.setCoordinates([
            () => {
                startCoordinates = result.value.coordinates;
                return {
                    width: result.value.coordinates.width * width,
                    height: result.value.coordinates.height * height,
                };
            },
            () => ({
                left: startCoordinates.left +
                    (startCoordinates.width - result.value.coordinates.width) / 2,
                top: startCoordinates.top +
                    (startCoordinates.height - result.value.coordinates.height) / 2,
            }),
        ]);
    }
    function center() {
        cropper.value.setCoordinates(() => ({
            left: result.value.size.width / 2 - result.value.coordinates.width / 2,
            top: result.value.size.height / 2 - result.value.coordinates.height / 2,
        }));
    }
    function maximize() {
        const center = {
            left: result.value.coordinates.left + result.value.coordinates.width / 2,
            top: result.value.coordinates.top + result.value.coordinates.height / 2,
        };
        cropper.value.setCoordinates([
            () => ({
                width: result.value.size.width,
                height: result.value.size.height,
            }),
            () => ({
                left: center.left - result.value.coordinates.width / 2,
                top: center.top - result.value.coordinates.height / 2,
            }),
        ]);
    }
    function reset() {
        result.value.image = null;
        imageSrc.value = "";
    }
    return {
        imageSrc,
        cropper,
        result,
        onFileChange,
        onChange,
        zoom,
        move,
        rotate,
        flip,
        resize,
        center,
        maximize,
        reset,
    };
}
