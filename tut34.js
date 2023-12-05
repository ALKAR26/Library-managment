
import sys
from PyQt5.QtWidgets import QApplication, QMainWindow, QWidget, QVBoxLayout, QPushButton, QLabel, QLineEdit, QMessageBox, QDialog, QFormLayout, QTextBrowser, QComboBox, QTextEdit

# Mock user data
user_credentials = {
    "user1": "password1",
    "user2": "password2",
    "user3": "password3"
}

# Mock state data with district-wise house prices
state_data = {
    "Andhra Pradesh": {
        "Amaravati": "₹90,00,000",
        "Visakhapatnam": "₹85,00,000",
        "Vijayawada": "₹82,00,000",
        "Guntur": "₹78,00,000",
        "Nellore": "₹72,00,000",
    },
    "Arunachal Pradesh": {
        "Itanagar": "₹68,00,000",
        "Tawang": "₹75,00,000",
        "Naharlagun": "₹70,00,000",
        "Pasighat": "₹72,00,000",
        "Bomdila": "₹65,00,000",
    },
    "Assam": {
        "Guwahati": "₹78,00,000",
        "Dibrugarh": "₹72,00,000",
        "Silchar": "₹68,00,000",
        "Jorhat": "₹75,00,000",
        "Nagaon": "₹70,00,000",
    },
    "Bihar": {
        "Patna": "₹78,00,000",
        "Gaya": "₹72,00,000",
        "Bhagalpur": "₹68,00,000",
        "Muzaffarpur": "₹75,00,000",
        "Darbhanga": "₹70,00,000",
    },
    "Chhattisgarh": {
        "Raipur": "₹70,00,000",
        "Bhilai": "₹75,00,000",
        "Bilaspur": "₹68,00,000",
        "Korba": "₹72,00,000",
        "Raigarh": "₹65,00,000",
    },
    "Goa": {
        "Panaji": "₹85,00,000",
        "Vasco da Gama": "₹82,00,000",
        "Margoa": "₹78,00,000",
        "Mapusa": "₹80,00,000",
        "Ponda": "₹75,00,000",
    },
    "Gujarat": {
        "Ahmedabad": "₹90,00,000",
        "Surat": "₹88,00,000",
        "Vadodara": "₹80,00,000",
        "Rajkot": "₹75,00,000",
        "Gandhinagar": "₹92,00,000",
    },
    "Haryana": {
        "Chandigarh": "₹85,00,000",
        "Faridabad": "₹82,00,000",
        "Gurgaon": "₹78,00,000",
        "Panipat": "₹80,00,000",
        "Ambala": "₹75,00,000",
    },
    "Himachal Pradesh": {
        "Shimla": "₹70,00,000",
        "Dharamshala": "₹72,00,000",
        "Mandi": "₹68,00,000",
        "Solan": "₹75,00,000",
        "Kullu": "₹70,00,000",
    },
    "Jharkhand": {
        "Ranchi": "₹70,00,000",
        "Jamshedpur": "₹75,00,000",
        "Dhanbad": "₹68,00,000",
        "Bokaro": "₹72,00,000",
        "Hazaribagh": "₹65,00,000",
    },
    "Karnataka": {
        "Bangalore": "₹85,00,000",
        "Mysore": "₹70,00,000",
        "Hubli": "₹65,00,000",
        "Mangalore": "₹90,00,000",
        "Belgaum": "₹60,00,000",
    },
    "Kerala": {
        "Thiruvananthapuram": "₹85,00,000",
        "Kochi": "₹88,00,000",
        "Kozhikode": "₹82,00,000",
        "Thrissur": "₹78,00,000",
        "Kollam": "₹72,00,000",
    },
    "Madhya Pradesh": {
        "Bhopal": "₹70,00,000",
        "Indore": "₹75,00,000",
        "Gwalior": "₹68,00,000",
        "Jabalpur": "₹72,00,000",
        "Ujjain": "₹65,00,000",
    },
    "Maharashtra": {
        "Mumbai": "₹1,00,00,000",
        "Pune": "₹90,00,000",
        "Nagpur": "₹85,00,000",
        "Aurangabad": "₹75,00,000",
        "Thane": "₹95,00,000",
    },
    "Manipur": {
        "Imphal": "₹75,00,000",
        "Bishnupur": "₹70,00,000",
        "Thoubal": "₹68,00,000",
        "Churachandpur": "₹72,00,000",
        "Senapati": "₹65,00,000",
    },
    "Meghalaya": {
        "Shillong": "₹78,00,000",
        "Tura": "₹72,00,000",
        "Jowai": "₹68,00,000",
        "Nongstoin": "₹75,00,000",
        "Williamnagar": "₹70,00,000",
    },
    "Mizoram": {
        "Aizawl": "₹75,00,000",
        "Lunglei": "₹70,00,000",
        "Saiha": "₹68,00,000",
        "Champhai": "₹72,00,000",
        "Serchhip": "₹65,00,000",
    },
    "Nagaland": {
        "Kohima": "₹78,00,000",
        "Dimapur": "₹72,00,000",
        "Mokokchung": "₹68,00,000",
        "Tuensang": "₹75,00,000",
        "Zunheboto": "₹70,00,000",
    },
    "Odisha": {
        "Bhubaneswar": "₹78,00,000",
        "Cuttack": "₹72,00,000",
        "Rourkela": "₹68,00,000",
        "Brahmapur": "₹75,00,000",
        "Sambalpur": "₹70,00,000",
    },
    "Punjab": {
        "Amritsar": "₹75,00,000",
        "Ludhiana": "₹70,00,000",
        "Jalandhar": "₹68,00,000",
        "Patiala": "₹72,00,000",
        "Bathinda": "₹65,00,000",
    },
    "Rajasthan": {
        "Jaipur": "₹78,00,000",
        "Jodhpur": "₹72,00,000",
        "Udaipur": "₹68,00,000",
        "Kota": "₹75,00,000",
        "Ajmer": "₹70,00,000",
    },
    "Sikkim": {
        "Gangtok": "₹80,00,000",
        "Namchi": "₹75,00,000",
        "Geyzing": "₹70,00,000",
        "Mangan": "₹78,00,000",
        "Ravangla": "₹82,00,000",
    },
    "Tamil Nadu": {
        "Chennai": "₹90,00,000",
        "Coimbatore": "₹85,00,000",
        "Madurai": "₹82,00,000",
        "Tiruchirappalli": "₹78,00,000",
        "Salem": "₹72,00,000",
    },
    "Telangana": {
        "Hyderabad": "₹85,00,000",
        "Warangal": "₹82,00,000",
        "Nizamabad": "₹78,00,000",
        "Khammam": "₹80,00,000",
        "Karimnagar": "₹75,00,000",
    },
    "Tripura": {
        "Agartala": "₹70,00,000",
        "Udaipur": "₹75,00,000",
        "Dharmanagar": "₹68,00,000",
        "Kailasahar": "₹72,00,000",
        "Belonia": "₹65,00,000",
    },
    "Uttar Pradesh": {
        "Lucknow": "₹78,00,000",
        "Kanpur": "₹72,00,000",
        "Ghaziabad": "₹68,00,000",
        "Agra": "₹75,00,000",
        "Varanasi": "₹70,00,000",
    },
    "Uttarakhand": {
        "Dehradun": "₹70,00,000",
        "Haridwar": "₹75,00,000",
        "Roorkee": "₹68,00,000",
        "Haldwani": "₹72,00,000",
        "Kashipur": "₹65,00,000",
    },
    "West Bengal": {
        "Kolkata": "₹85,00,000",
        "Asansol": "₹70,00,000",
        "Siliguri": "₹65,00,000",
        "Durgapur": "₹90,00,000",
        "Bardhaman": "₹60,00,000",
    },
    "Andaman and Nicobar Islands": {
        "Port Blair": "₹80,00,000",
        "Car Nicobar": "₹75,00,000",
        "Mayabunder": "₹72,00,000",
        "Nancowry": "₹78,00,000",
        "Diglipur": "₹82,00,000",
    },
    "Chandigarh": {
        "Chandigarh": "₹85,00,000",
    },
    "Dadra and Nagar Haveli and Daman and Diu": {
        "Daman": "₹75,00,000",
        "Diu": "₹72,00,000",
        "Silvassa": "₹68,00,000",
    },
    "Lakshadweep": {
        "Kavaratti": "₹70,00,000",
        "Agatti": "₹75,00,000",
    },
    "Delhi": {
        "New Delhi": "₹90,00,000",
        "Delhi Cantonment": "₹85,00,000",
    },
    "Puducherry": {
        "Puducherry": "₹78,00,000",
        "Karaikal": "₹72,00,000",
        "Mahe": "₹68,00,000",
        "Yanam": "₹75,00,000",
    }
}

class LoginWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("House Price Checker")
        self.setGeometry(100, 100, 400, 200)

        self.central_widget = QWidget(self)
        self.setCentralWidget(self.central_widget)

        self.layout = QVBoxLayout()

        self.signup_button = QPushButton("Sign Up", self)
        self.signup_button.clicked.connect(self.show_signup_dialog)
        self.layout.addWidget(self.signup_button)

        self.signin_button = QPushButton("Sign In", self)
        self.signin_button.clicked.connect(self.show_signin_dialog)
        self.layout.addWidget(self.signin_button)

        self.central_widget.setLayout(self.layout)

    def show_signup_dialog(self):
        signup_dialog = SignupDialog(self)
        result = signup_dialog.exec_()

        if result == QDialog.Accepted:
            username = signup_dialog.username_input.text()
            state_prices_window = StatePricesWindow(username)
            state_prices_window.exec_()

    def show_signin_dialog(self):
        signin_dialog = SigninDialog(self)
        signin_dialog.exec_()

class SignupDialog(QDialog):
    def __init__(self, parent):
        super().__init__(parent)
        self.setWindowTitle("Sign Up")

        layout = QFormLayout()

        self.username_input = QLineEdit(self)
        layout.addRow("Username:", self.username_input)

        self.password_input = QLineEdit(self)
        self.password_input.setEchoMode(QLineEdit.Password)
        layout.addRow("Password:", self.password_input)

        self.signup_button = QPushButton("Sign Up", self)
        self.signup_button.clicked.connect(self.signup)
        layout.addWidget(self.signup_button)

        self.setLayout(layout)

    def signup(self):
        username = self.username_input.text()
        password = self.password_input.text()

        if username in user_credentials:
            QMessageBox.warning(self, "Sign Up Error", "Username already exists. Please choose a different one.")
        else:
            user_credentials[username] = password
            QMessageBox.information(self, "Sign Up Successful", "Account created successfully. You can now sign in.")
            self.accept()

class SigninDialog(QDialog):
    def __init__(self, parent):
        super().__init__(parent)
        self.setWindowTitle("Sign In")

        layout = QFormLayout()

        self.username_input = QLineEdit(self)
        layout.addRow("Username:", self.username_input)

        self.password_input = QLineEdit(self)
        self.password_input.setEchoMode(QLineEdit.Password)
        layout.addRow("Password:", self.password_input)

        self.signin_button = QPushButton("Sign In", self)
        self.signin_button.clicked.connect(self.signin)
        layout.addWidget(self.signin_button)

        self.forgot_password_button = QPushButton("Forgot Password", self)
        self.forgot_password_button.clicked.connect(self.show_forgot_password_dialog)
        layout.addWidget(self.forgot_password_button)

        self.setLayout(layout)

    def signin(self):
        username = self.username_input.text()
        password = self.password_input.text()

        if username in user_credentials and user_credentials[username] == password:
            QMessageBox.information(self, "Sign In Successful", f"Welcome, {username}!")
            self.accept()
            self.show_state_prices(username)
        else:
            QMessageBox.warning(self, "Sign In Error", "Invalid username or password.")

    def show_forgot_password_dialog(self):
        forgot_password_dialog = ForgotPasswordDialog(self)
        forgot_password_dialog.exec_()

    def show_state_prices(self, username):
        state_prices_window = StatePricesWindow(username)
        state_prices_window.exec_()

class ForgotPasswordDialog(QDialog):
    def __init__(self, parent):
        super().__init__(parent)
        self.setWindowTitle("Forgot Password")

        layout = QFormLayout()

        self.username_input = QLineEdit(self)
        layout.addRow("Username:", self.username_input)

        self.new_password_input = QLineEdit(self)
        self.new_password_input.setEchoMode(QLineEdit.Password)
        layout.addRow("New Password:", self.new_password_input)

        self.reset_password_button = QPushButton("Reset Password", self)
        self.reset_password_button.clicked.connect(self.reset_password)
        layout.addWidget(self.reset_password_button)

        self.setLayout(layout)

    def reset_password(self):
        username = self.username_input.text()
        new_password = self.new_password_input.text()

        if username in user_credentials:
            user_credentials[username] = new_password
            QMessageBox.information(self, "Password Reset", "Password reset successfully.")
            self.accept()
        else:
            QMessageBox.warning(self, "Reset Password Error", "Username not found.")

class StatePricesWindow(QDialog):
    def __init__(self, username):
        super().__init__()
        self.setWindowTitle("Indian States and District-wise House Prices")

        layout = QVBoxLayout()

        state_prices_label = QLabel("State-wise House Prices in India")
        layout.addWidget(state_prices_label)

        self.city_combobox = QComboBox(self)
        self.city_combobox.addItem("Select City")
        self.city_combobox.addItems(state_data.keys())
        layout.addWidget(self.city_combobox)

        self.district_combobox = QComboBox(self)
        self.district_combobox.addItem("Select District")
        layout.addWidget(self.district_combobox)

        self.state_prices_text = QTextBrowser(self)
        layout.addWidget(self.state_prices_text)

        self.show_prices_button = QPushButton("Show Prices", self)
        self.show_prices_button.clicked.connect(self.show_prices)
        layout.addWidget(self.show_prices_button)

        self.history_button = QPushButton("History", self)
        self.history_button.clicked.connect(self.show_history)
        layout.addWidget(self.history_button)

        self.history_text = QTextEdit(self)
        self.history_text.setReadOnly(True)
        layout.addWidget(self.history_text)

        self.setLayout(layout)

        # Connect the city_combobox to update district_combobox
        self.city_combobox.currentIndexChanged.connect(self.update_district_combobox)

        self.username = username
        self.history = []

    def update_district_combobox(self):
        selected_city = self.city_combobox.currentText()
        self.district_combobox.clear()
        self.district_combobox.addItem("Select District")
        self.district_combobox.addItems(state_data.get(selected_city, {}).keys())

    def show_prices(self):
        selected_city = self.city_combobox.currentText()
        selected_district = self.district_combobox.currentText()

        if selected_city == "Select City" or selected_district == "Select District":
            QMessageBox.warning(self, "Price Lookup Error", "Please select a city and district to view house prices.")
        else:
            district_prices = state_data.get(selected_city, {}).get(selected_district, "Not Available")
            self.state_prices_text.setPlainText(f"House Price in {selected_district}, {selected_city}: {district_prices}")

            # Add to history
            self.history.append(f"{selected_district}, {selected_city}: {district_prices}")

    def show_history(self):
        history_dialog = HistoryDialog(self.history, self)
        history_dialog.exec_()

class HistoryDialog(QDialog):
    def __init__(self, history, parent):
        super().__init__(parent)
        self.setWindowTitle("Price History")

        layout = QVBoxLayout()

        history_text = QTextEdit(self)
        history_text.setPlainText("\n".join(history))
        history_text.setReadOnly(True)
        layout.addWidget(history_text)

        self.setLayout(layout)

if __name__ == "__main__":
    app = QApplication(sys.argv)
    login_window = LoginWindow()
    login_window.show()
    sys.exit(app.exec_())

