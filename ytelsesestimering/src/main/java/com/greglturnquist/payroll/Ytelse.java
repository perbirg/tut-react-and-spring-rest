package com.greglturnquist.payroll;

public class Ytelse {
    private String nettoytelse;
    private String bruttoytelse;

    public Ytelse(String nettoytelse, String bruttoytelse) {
        this.nettoytelse = nettoytelse;
        this.bruttoytelse = bruttoytelse;
    }

    public String getNettoytelse() {
        return nettoytelse;
    }

    public void setNettoytelse(String nettoytelse) {
        this.nettoytelse = nettoytelse;
    }

    public String getBruttoytelse() {
        return bruttoytelse;
    }

    public void setBruttoytelse(String bruttoytelse) {
        this.bruttoytelse = bruttoytelse;
    }
}
