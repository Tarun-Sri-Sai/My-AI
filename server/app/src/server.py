from os.path import dirname, join, abspath
from sys import path as sys_path


current_dir = dirname(abspath(__file__))
real_estate_predictor_dir = join(current_dir, 'real_estate_predictor')
language_detector_dir = join(current_dir, 'language_detector')
sys_path.append(real_estate_predictor_dir)
sys_path.append(language_detector_dir)


from real_estate_predictor.real_estate import RealEstate
from language_detector.language import Language
from flask import Flask, request
from flask_cors import CORS


server = Flask(__name__)
CORS(server)
real_estate = RealEstate()
language = Language()


@server.route('/real_estate_predictor/column_names', methods=['GET'])
def column_names_endpoint():
    column_names = real_estate.get_columns()
    return {'column_names': column_names}


@server.route('/real_estate_predictor/data_values', methods=['GET'])
def data_values_endpoint():
    data_values = real_estate.get_data_values()
    return {'data_values': data_values}


@server.route('/real_estate_predictor/input', methods=['POST'])
def input_endpoint():
    input_data = request.json
    processed_input = real_estate.process_input(input_data)
    return {'processed_input': processed_input}


@server.route('/real_estate_predictor/prediction', methods=['POST'])
def prediction_endpoint():
    processed_input = request.json
    price_in_lacs = real_estate.predict_price(processed_input)
    return {'price_in_lacs': price_in_lacs}


@server.route('/language_detector/language', methods=['POST'])
def detect_language_endpoint():
    text_input = request.json['text_input']
    language_code = language.compute_language(text_input)
    return {'language_code': language_code}


if __name__ == '__main__':
    server.run(host='0.0.0.0')
