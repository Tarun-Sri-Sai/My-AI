from pandas import DataFrame


def remove(df, columns):
    result = DataFrame()
    for column in df.columns:
        if column in columns:
            continue
        result[column] = df[column]
    return result


def snake_case(name):
    return '_'.join(name.strip().replace(':', '').lower().split(' '))


def rename(df, columns):
    result = DataFrame()
    for column in df.columns:
        if column not in columns:
            result[column] = df[columns]
            continue
        result[snake_case(column)] = df[column]
    return result


def string_cols(df):
    result = [*filter(lambda x: df[x].dtype == 'object', df.columns)]
    return result


def strip(df, columns):
    result = DataFrame()
    for column in df.columns:
        if column not in columns:
            result[column] = df[column]
            continue
        result[column] = df[column].apply(lambda x: x.strip())
    return result


def title(df, columns):
    result = DataFrame()
    for column in df.columns:
        if column not in columns:
            result[column] = df[column]
            continue
        result[column] = df[column].apply(str.title)
    return result


def create_encodings(column, output):
    df_temp = DataFrame({'column': column, 'output': output})
    unique_categories = df_temp['column'].unique()
    avg_prices = df_temp.groupby('column')['output'].mean()
    sorted_categories = list(sorted(unique_categories, key=lambda x: avg_prices[x]))
    encodings = {category: index for index, category in enumerate(sorted_categories)}
    return encodings


def encode(column, encodings):
    return column.map(encodings)


def get_values(df):
    return {key: [*set(df[key].values())] for key, _  in df.items()}


def remove_outliers(df, columns, min_count):
    result = df
    for column in columns:
        value_counts = result[column].value_counts().to_dict()
        result = result[result[column].apply(lambda x: value_counts[x] >= min_count)]
    return result
