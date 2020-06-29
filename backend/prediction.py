import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import time
from sklearn import metrics
from sklearn.neighbors import KDTree
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.preprocessing import scale
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import classification_report, confusion_matrix
import numpy
from scipy.spatial import KDTree



class Predictor:

    def predictResult(self, year, mileage):

        dataset = pd.read_csv(r'data.csv')
        year = 0
        mileage = 0
        year = year
        print(year)
        mileage = mileage
        print(mileage)
        print(dataset.head())
        X = dataset.iloc[:, :-1].values
        Y = dataset.iloc[:, 2].values
        print(X)
        print(Y)
        Xs = scale(X)
        X_train, X_test, y_train, y_test = train_test_split(
            Xs, Y, test_size=0.10)
        # normalizing to have reasonble values
        scaler = StandardScaler()
        scaler.fit(X_train)
        scaler.fit(X)
        X_train = scaler.transform(X_train)
        X_test = scaler.transform(X_test)
        X = scaler.transform(X)
        # y_pred=classifier.predict([2014,12330])
        # print(y_pred)
        k_range = range(2, 70)
        error = []
        scores = []
        knn = KNeighborsClassifier(n_neighbors=2)
        k = 2
        knn.fit(X_train, y_train)
        pred_i = knn.predict(X_test)
        maxscore = metrics.accuracy_score(y_test, pred_i)
        print(maxscore)
        # Calculating error for K values between 1 and 40
        for i in k_range:
            knn = KNeighborsClassifier(n_neighbors=i)
            knn.fit(X_train, y_train)
            pred_i = knn.predict(X_test)
            error.append(np.mean(pred_i != y_test))
            scores.append(metrics.accuracy_score(y_test, pred_i))
            # print("ok")
            # print(metrics.accuracy_score(y_test, pred_i))
            if metrics.accuracy_score(y_test, pred_i) > maxscore:
                # print("highscore")
                # print(maxscore)
                k = i
                maxscore = metrics.accuracy_score(y_test, pred_i)
        f = plt.figure(1, figsize=(12, 6))
        plt.plot(range(2, 70), error, color='red', linestyle='dashed', marker='o',
                 markerfacecolor='blue', markersize=10)
        plt.title('Error Rate K Value')
        plt.xlabel('K Value')
        plt.ylabel('Mean Error')
        # f.show()
        g = plt.figure(2, figsize=(12, 6))
        plt.plot(k_range, scores)
        plt.xlabel('Value of K for KNN')
        plt.ylabel('Testing Accuracy')
        # g.show()
        plt.savefig("graph.png")
        # print(k)
        classifier = KNeighborsClassifier(n_neighbors=k)
        classifier.fit(X, Y)
        y_pred = classifier.predict(X_test)
        output_fault = classifier.predict([[year, mileage]])
        print(output_fault)
        return output_fault[0]
