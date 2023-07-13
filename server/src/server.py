from os.path import dirname, join, abspath
from sys import path as sys_path


current_dir = dirname(abspath(__file__))
real_estate_predictor_dir = join(current_dir, 'real_estate_predictor')
language_detector_dir = join(current_dir, 'language_detector')
sys_path.append(real_estate_predictor_dir)
sys_path.append(language_detector_dir)


from real_estate_predictor.app import App as RealEstatePredictor
from language_detector.app import App as LanguageDetector
from flask import Flask, request, jsonify
from flask_cors import CORS


flask = Flask(__name__)
CORS(flask)
real_estate_predictor = RealEstatePredictor()
language_detector = LanguageDetector()


@flask.route('/real_estate_predictor/column_names', methods=['GET'])
def column_names_endpoint():
    column_names = real_estate_predictor.get_columns()
    return {'column_names': column_names}


@flask.route('/real_estate_predictor/data_values', methods=['GET'])
def data_values_endpoint():
    data_values = real_estate_predictor.get_data_values()
    return {'data_values': data_values}


@flask.route('/real_estate_predictor/input', methods=['PUT', 'GET'])
def input_endpoint():
    method = request.method
    match method:
        case 'PUT':
            input_data = request.get_json()
            real_estate_predictor.process_input(input_data)
            return jsonify({'message': 'Success'}), 200
        case 'GET':
            processed_input = real_estate_predictor.get_processed()
            return {'processed_input': processed_input}


@flask.route('/real_estate_predictor/prediction', methods=['PUT', 'GET'])
def prediction_endpoint():
    method = request.method
    match method:
        case 'PUT':
            processed_input = request.get_json()
            real_estate_predictor.predict_price(processed_input)
            return jsonify({'message': 'Success'}), 200
        case 'GET':
            price_in_lacs = real_estate_predictor.get_price()
            return {'price_in_lacs': price_in_lacs}


@flask.route('/language_detector/language', methods=['PUT', 'GET'])
def detect_language_endpoint():
    method = request.method
    match method:
        case 'PUT':
            text_input = request.get_json()['text_input']
            language_detector.compute_language(text_input)
            return jsonify({'message': 'Success'}), 200
        case 'GET':
            language_code = language_detector.get_language()
            return {'language_code': language_code}


if __name__ == '__main__':
    flask.run()
